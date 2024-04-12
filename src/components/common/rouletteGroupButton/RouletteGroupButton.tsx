import styles from './rouletteGroupButton.module.scss'
import ArrowRight from '@/assets/icons/arrow_right.svg?react'

interface rouletteGroupButtonProps {
  /** 버튼 타이틀 */
  title: string
  /** 버튼 강조 타이틀 */
  titleAcc?: string
  /** 버튼 설명 */
  desc: string
  /** 버튼 클릭 함수 */
  onClick: () => void
  /** 버튼 행동 텍스트 */
  rightText: string
  /** 버튼 아이콘 */
  icon?: React.ReactNode
}

const RouletteGroupButton = ({ title, titleAcc, desc, rightText, icon, onClick }: rouletteGroupButtonProps) => {
  return (
    <button className={`${styles.container} ${icon ? styles.icon : ''}`} type="button" onClick={onClick}>
      <div className={styles.leftArea}>
        {icon}
        <div className={styles.textArea}>
          <p className={styles.title}>
            <span className={styles.accent}>{titleAcc}</span> {title}
          </p>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
      <div className={styles.rightArea}>
        <span>{rightText}</span>
        <ArrowRight />
      </div>
    </button>
  )
}

export default RouletteGroupButton
