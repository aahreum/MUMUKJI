import styles from './grounpListEmpty.module.scss'
import emptyImg from '/images/empty.png'
import Button from '@/components/common/button/Button'

const GroupListEmpty = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contentsArea}>
        <img src={emptyImg} alt="emptyImg" />
        <p className={styles.title}>저장된 그룹이 없어요</p>
        <p className={styles.desc}>나만의 메뉴로 구성된 그룹을 생성해보세요.</p>
      </div>
      <Button
        label="그룹 추가하기"
        type="button"
        onClick={() => {
          console.log('추가')
        }}
      />
    </div>
  )
}

export default GroupListEmpty
