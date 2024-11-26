import styles from './modalDimmed.module.scss'

const ModalDimmed = ({ onClick }: { onClick?: () => void }) => {
  return <div className={styles.container} onClick={onClick} />
}

export default ModalDimmed
