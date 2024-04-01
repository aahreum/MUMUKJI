import styles from './title.module.scss'

interface TitleProps {
  /** 텍스트 입력
   */
  children: React.ReactNode
  /** 텍스트 정렬
   */
  textAlignCenter?: boolean
}

const Title = ({ children, textAlignCenter = false }: TitleProps): React.ReactElement => {
  return <h2 className={`${styles.title} ${!textAlignCenter ? '' : styles.center}`}>{children}</h2>
}

export default Title
