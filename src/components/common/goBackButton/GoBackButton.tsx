import styles from './goBackButton.module.scss'
import ArrowLeftIcon from '@/assets/icons/arrow_left.svg?react'

interface GoBackButtonProps {
  onClick: () => void
}

const GoBackButton = ({ onClick }: GoBackButtonProps) => {
  return (
    <button className={styles.container} type="button" onClick={onClick}>
      <ArrowLeftIcon />
    </button>
  )
}

export default GoBackButton
