import styles from '@/styles/components/button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  icon?: React.ReactNode
  styleType?: 'solid' | 'outline'
  roundType?: 'loundSquare' | 'square' | 'capsule'
  size?: 'xs' | 's' | 'm' | 'l'
  color?: 'primary' | 'secondary' | 'tertiary' | 'negative'
  full?: boolean
}

const Button = ({
  label,
  icon,
  styleType = 'solid',
  roundType = 'loundSquare',
  size = 'l',
  color = 'primary',
  full = false,
  type = 'button',
  disabled = false,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${styles.container} ${styleType === 'solid' ? styles.solid : styles.outline}  
      ${roundType === 'loundSquare' ? styles.round : roundType === 'square' ? styles['round--square'] : styles['round--capsule']} 
      ${size === 'l' ? styles.size : size === 'm' ? styles['size--m'] : size === 's' ? styles['size--s'] : styles['size--xs']} 
      ${
        styleType === 'solid'
          ? color === 'secondary'
            ? styles['solid--secondary']
            : color === 'tertiary'
              ? styles['solid--tertiary']
              : color === 'negative'
                ? styles['solid--negative']
                : styles['solid--primary']
          : color === 'secondary'
            ? styles['outline--secondary']
            : color === 'tertiary'
              ? styles['outline--tertiary']
              : color === 'negative'
                ? styles['outline--negative']
                : styles['outline--primary']
      }
      ${full === true ? styles['size--full'] : ''}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  )
}

export default Button
