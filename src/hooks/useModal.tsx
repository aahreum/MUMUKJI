import { modalStateAtom } from '@/recoil/modalState'
import { useRecoilState } from 'recoil'

const useModal = (modalType: string) => {
  const [modalState, setModalState] = useRecoilState(modalStateAtom)
  const isOpen = modalState[modalType] || false

  const openModal = () => {
    document.body.style.overflow = 'hidden'
    setModalState((prev) => ({ ...prev, [modalType]: true }))
  }

  const closeModal = () => {
    setModalState((prev) => {
      const newState = { ...prev, [modalType]: false }
      // 열려있는 모달 없으면 스크롤 풀기
      if (!Object.values(newState).some(Boolean)) {
        document.body.style.overflow = 'auto'
      }
      return newState
    })
  }

  const closeAllModal = () => {
    setModalState({})
    document.body.style.overflow = 'auto'
  }

  return { isOpen, openModal, closeModal, closeAllModal }
}

export default useModal
