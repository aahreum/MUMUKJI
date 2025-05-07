import { useEffect } from 'react'
import { useBlocker } from 'react-router-dom'

const usePrompt = (when: boolean, message: string, onConfirm?: () => void) => {
  const blocker = useBlocker(({ currentLocation, nextLocation }) => {
    return when && currentLocation.pathname !== nextLocation.pathname
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
        setTimeout(() => window.history.back(), 0)
      } else {
        blocker.reset()
      }
    }
  }, [blocker, message, onConfirm])
}

export default usePrompt
