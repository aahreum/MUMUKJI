import { Link } from 'react-router-dom'
import styles from './linkButton.module.scss'

interface linkButtonProps {
  link: string
  primary?: boolean
  label: string
}

const LinkButton = ({ link, label, primary = true }: linkButtonProps): React.ReactElement => {
  return (
    <Link className={`${styles.button} ${primary ? '' : styles.sub}`} to={link}>
      {label}
    </Link>
  )
}

export default LinkButton
