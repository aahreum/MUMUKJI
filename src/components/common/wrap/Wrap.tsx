import styles from './wrap.module.scss'

const Wrap = ({ children }: { children: React.ReactNode }): React.ReactElement => {
  return <div className={styles.wrap}>{children}</div>
}

export default Wrap
