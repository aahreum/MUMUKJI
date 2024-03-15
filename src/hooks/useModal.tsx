import { useState } from 'react'

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false)

  const rootDiv = document.getElementById('root')!
  const openModal = () => {
    rootDiv.style.overflow = 'hidden'
    setModalOpen(true)
  }

  const closeModal = () => {
    rootDiv.style.overflow = 'auto'
    setModalOpen(false)
  }

  return { modalOpen, openModal, closeModal }
}

export default useModal
