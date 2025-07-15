import { atom } from 'recoil'

interface ModalState {
  [modalType: string]: boolean
}

export const modalStateAtom = atom<ModalState>({
  key: 'modalState',
  default: {},
})
