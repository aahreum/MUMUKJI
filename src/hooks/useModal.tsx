import { useState } from 'react'
import { modalCountState } from '@/recoil/modalCount'
import { useRecoilState } from 'recoil'

const useModal = () => {
  const [modalCount, setModalCount] = useRecoilState(modalCountState)
  const [isOpen, setisOpen] = useState(false)

  const openModal = () => {
    setModalCount((prev) => prev + 1)
    console.log(modalCount)
    document.body.style.overflow = 'hidden'
    setisOpen(true)
  }

  const closeModal = () => {
    setModalCount((prev) => prev - 1)
    console.log(modalCount)
    if (modalCount <= 1) {
      document.body.style.overflow = 'auto'
    }
    setisOpen(false)
  }

  const closeAllModal = () => {
    setModalCount(0)
    document.body.style.overflow = 'auto'
  }

  return { isOpen, openModal, closeModal, closeAllModal }
}

export default useModal
