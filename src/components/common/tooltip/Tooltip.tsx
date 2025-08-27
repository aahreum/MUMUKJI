import styles from './tooltip.module.scss'

interface TooltipProps {
  color: string
  position: string
  text: string
}

const Tooltip = ({ color = 'secondary', position, text }: TooltipProps) => {
  const tooltipClass = `${styles.container} ${styles['container--' + color]} ${styles['container--' + position]}`

  return (
    <div className={tooltipClass}>
      <span className={styles.text}>{text}</span>
    </div>
  )
}

export default Tooltip
