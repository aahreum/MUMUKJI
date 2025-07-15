import styles from './grounpListEmpty.module.scss'
import emptyImg from '/images/empty.png'

const GroupListEmpty = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentsArea}>
        <img src={emptyImg} alt="emptyImg" />
        <p className={styles.title}>저장된 그룹이 없어요</p>
        <p className={styles.desc}>나만의 메뉴로 구성된 그룹을 생성해보세요.</p>
      </div>
    </div>
  )
}

export default GroupListEmpty
