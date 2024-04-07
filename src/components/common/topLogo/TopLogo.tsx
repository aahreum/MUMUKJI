import styles from './topLogo.module.scss'
import Logo from '@/assets/icons/logo.svg?react'

const TopLogo = (): React.ReactElement => {
  return (
    <h1 className={styles.container}>
      <Logo />
    </h1>
  )
}

export default TopLogo
