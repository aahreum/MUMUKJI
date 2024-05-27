import styles from './groupRouletteList.module.scss'
import RouletteGroupButton from '../common/rouletteGroupButton/RouletteGroupButton'

const GroupRouletteList = () => {
  const groupData = localStorage.getItem('groupData')
  return (
    <>
      {groupData === null ? (
        <div className={styles.nullContainer}>
          <p className={styles.title}>저장된 그룹이 없어요</p>
          <p className={styles.desc}>나만의 메뉴로 구성된 그룹을 생성해보세요.</p>
        </div>
      ) : (
        <RouletteGroupButton
          primary={false}
          title="서울 사무실 점심"
          desc="홍콩반점, 김밥천국, 왕족발보쌈, 신전떡볶이, 홍콩반점, 김밥천국, 왕족발보쌈, 신전떡볶이"
          onClick={() => console.log('하하')}
          rightText={null}
        />
      )}
    </>
  )
}

export default GroupRouletteList
