import { useState } from 'react'
import { modalCountState } from '@/recoil/modalCount'
import { useRecoilState } from 'recoil'

const useModal = () => {
  const [isOpen, setisOpen] = useState(false)
  const [modalCount, setModalCount] = useRecoilState(modalCountState)

  const openModal = () => {
    setModalCount((prev) => prev + 1)
    document.body.style.overflow = 'hidden'
    setisOpen(true)
  }

  const closeModal = () => {
    setModalCount((prev) => prev - 1)
    if (modalCount <= 1) {
      document.body.style.overflow = 'auto'
    }
    setisOpen(false)
  }

  return { isOpen, openModal, closeModal }
}

export default useModal
