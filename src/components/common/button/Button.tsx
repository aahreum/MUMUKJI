import styles from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** 버튼 텍스트 */
  label: string
  /** 버튼 스타일 */
  primary?: boolean
}

const Button = ({ type = 'button', label, onClick, primary = true, disabled = false }: ButtonProps) => {
  return (
    <button disabled={disabled} className={`${styles.button} ${primary ? '' : styles.sub}`} type={type} onClick={onClick}>
      {label}
    </button>
  )
}

export default Button
