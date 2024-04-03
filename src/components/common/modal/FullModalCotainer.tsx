import GoBackButton from '../goBackButton/GoBackButton'
import styles from './fullModalContainer.module.scss'
import ModalPotal from './ModalPotal'

interface FullModalContainerProps {
  onClick: () => void
  children: React.ReactElement
}

const FullModalCotainer = ({ onClick, children }: FullModalContainerProps) => {
  return (
    <ModalPotal>
      <div className={styles.container}>
        <GoBackButton onClick={onClick} />
        {children}
      </div>
    </ModalPotal>
  )
}

export default FullModalCotainer
