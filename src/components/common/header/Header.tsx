import styles from './hedaer.module.scss'
import GoBackButton from '../goBackButton/GoBackButton'
import { useNavigate } from 'react-router'

interface headerProps {
  title: string
}

const Header = ({ title }: headerProps) => {
  const navigate = useNavigate()
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <GoBackButton
          onClick={() => {
            navigate('/')
          }}
        />
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  )
}

export default Header
