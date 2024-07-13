import styles from './button.module.scss'
import { buttonColorTypes } from '@/types/buttonColorTypes'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 텍스트 */
  label: string
  /** 버튼 크기 */
  size?: 's' | 'm' | 'l'
  /** 버튼 컬러 스타일 */
  color?: buttonColorTypes
  /** 버튼 폰트 스타일 */
  light?: boolean
}

const Button = ({ type = 'button', label, onClick, color = 'primary', disabled = false, light = false, size = 'l' }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${color === 'primary' ? '' : color === 'secondary' ? styles.secondary : color === 'negative' ? styles.negative : styles.basic} ${light ? styles.light : ''} ${size === 'l' ? '' : size === 'm' ? styles.sizeM : styles.sizeS}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
