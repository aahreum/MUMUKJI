import styles from './topLogo.module.scss'
import Logo from '@/assets/icons/logo.svg?react'

const TopLogo = (): React.ReactElement => {
  return (
    <div className={styles.container}>
      <Logo />
    </div>
  )
}

export default TopLogo
