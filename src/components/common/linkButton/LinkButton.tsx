import { Link } from 'react-router-dom'
import styles from './linkButton.module.scss'

interface linkButtonProps {
  /** 이동 경로 입력 */
  link: string
  /** 버튼 타입 선택 */
  primary?: boolean
  /** 버튼 라벨 */
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
