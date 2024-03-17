import { useState } from 'react'

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const body = document.body

  const openModal = () => {
    body.style.overflow = 'hidden'
    setModalOpen(true)
  }

  const closeModal = () => {
    body.style.overflow = 'auto'
    setModalOpen(false)
  }

  return { modalOpen, openModal, closeModal }
}

export default useModal