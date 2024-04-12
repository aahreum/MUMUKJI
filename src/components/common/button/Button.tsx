import styles from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 텍스트 */
  label: string
  /** 버튼 스타일 */
  primary?: boolean
  /** 버튼 폰트 스타일 */
  light?: boolean
}

const Button = ({ type = 'button', label, onClick, primary = true, disabled = false, light = false }: ButtonProps) => {
  return (
    <button disabled={disabled} className={`${styles.button} ${primary ? '' : styles.sub} ${light ? styles.light : ''}`} type={type} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
