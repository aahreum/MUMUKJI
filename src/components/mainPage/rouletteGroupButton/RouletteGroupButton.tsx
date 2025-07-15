import styles from './rouletteGroupButton.module.scss'
import ArrowRight from '@/assets/icons/arrow_right.svg?react'

interface rouletteGroupButtonProps {
  title: string
  titleAcc?: string
  desc: string
  onClick: () => void
  rightText: string | null
  primary?: boolean
}

const RouletteGroupButton = ({ title, titleAcc, desc, rightText, onClick, primary = true }: rouletteGroupButtonProps) => {
  return (
    <button className={`${styles.container} ${primary ? '' : styles.sub}`} type="button" onClick={onClick}>
      <div className={styles.leftArea}>
        <p className={styles.title}>
          <span className={styles.accent}>{titleAcc}</span> {title}
        </p>
        <p className={styles.desc}>{desc}</p>
      </div>
      <div className={styles.rightArea}>
        {rightText && <p>{rightText}</p>}
        <ArrowRight />
      </div>
    </button>
  )
}

export default RouletteGroupButton
