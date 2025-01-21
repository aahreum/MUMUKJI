import styles from './title.module.scss'

interface TitleProps {
  children: React.ReactNode
  textAlignCenter?: boolean
}

const Title = ({ children, textAlignCenter = true }: TitleProps): React.ReactElement => {
  return <h2 className={`${styles.title} ${textAlignCenter ? styles.center : ''}`}>{children}</h2>
}

export default Title
