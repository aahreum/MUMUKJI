import { Link } from 'react-router-dom'
import styles from './linkButton.module.scss'

interface linkButtonProps {
  link: string
  sub?: boolean
}

const LinkButton = ({ link, sub }: linkButtonProps): React.ReactElement => {
  return (
    <Link className={`${styles.button} ${sub && styles.sub}`} to={link}>
      홈으로 돌아가기
    </Link>
  )
}

export default LinkButton
