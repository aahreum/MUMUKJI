import { createPortal } from 'react-dom'

const ModalPotal = ({ children }: { children: React.ReactNode }) => {
  const modalRoot = document.getElementById('modal')!

  return createPortal(children, modalRoot)
}

export default ModalPotal
