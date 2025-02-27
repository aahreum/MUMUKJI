import styles from './groupAddButton.module.scss'
import { Link } from 'react-router-dom'
import AddIcon from '@/assets/icons/add.svg?react'

const GroupAddButton = () => {
  return (
    <Link className={`${styles.container} ${styles.primary}`} to={'/group/add'}>
      <AddIcon />
      그룹추가
    </Link>
  )
}

export default GroupAddButton
