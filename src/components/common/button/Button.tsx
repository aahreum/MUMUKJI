import styles from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 텍스트 */
  label: string
  /** 버튼 크기 */
  size?: 's' | 'm' | 'l'
  /** 버튼 컬러 스타일 */
  color?: 'primary' | 'secondary' | 'basic'
  /** 버튼 폰트 스타일 */
  light?: boolean
}

const Button = ({ type = 'button', label, onClick, color = 'primary', disabled = false, light = false, size = 'l' }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${styles.button} ${color === 'primary' ? '' : color === 'secondary' ? styles.secondary : styles.basic} ${light ? styles.light : ''} ${size === 'l' ? '' : size === 'm' ? styles.sizeM : styles.sizeS}`}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  )
}

export default Button
