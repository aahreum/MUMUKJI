import { useState } from 'react'
import styles from './toggle.module.scss'

const Toggle = () => {
  const [onToggle, setOnToggle] = useState(false)

  const handleToggleClick = () => {
    setOnToggle(!onToggle)
  }
  return (
    <div className={`${styles.container} ${onToggle && styles['container--on']}`} onClick={handleToggleClick}>
      <div className={`${styles.toggleCircle} ${onToggle && styles['toggleCircle--on']}`}></div>
    </div>
  )
}

export default Toggle
