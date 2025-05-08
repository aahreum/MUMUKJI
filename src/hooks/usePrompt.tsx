import { useEffect, useRef } from 'react'
import { useBlocker, useNavigate, Location } from 'react-router-dom'

const usePrompt = (when: boolean, message: string, onConfirm?: () => void) => {
  const navigate = useNavigate()
  const lastLocationRef = useRef<Location | null>(null)

  const blocker = useBlocker((tx) => {
    if (when && tx.currentLocation.pathname !== tx.nextLocation.pathname) {
      lastLocationRef.current = tx.nextLocation
      return true
    }
    return false
  })

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (when) {
        e.preventDefault()
        e.returnValue = message
      }
    }

    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [when, message])

  useEffect(() => {
    if (blocker.state === 'blocked') {
      const confirmLeave = window.confirm(message)
      if (confirmLeave) {
        onConfirm?.()
        blocker.proceed()
        if (lastLocationRef.current) {
          navigate(lastLocationRef.current.pathname, { replace: true })
        }
      } else {
        blocker.reset()
      }
    }
  }, [blocker, message, onConfirm, navigate])
}

export default usePrompt
