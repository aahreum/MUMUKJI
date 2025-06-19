import styles from './groupRouletteList.module.scss'
import useGroup from '@/hooks/useGroup'
import RouletteGroupButton from '@/components/mainPage/rouletteGroupButton/RouletteGroupButton'

const GroupRouletteList = () => {
  const { groupList } = useGroup()
  console.log(groupList)
  return (
    <>
      {groupList.length === 0 ? (
        <div className={styles.nullContainer}>
          <p className={styles.title}>저장된 그룹이 없어요</p>
          <p className={styles.desc}>나만의 메뉴로 구성된 그룹을 생성해보세요.</p>
        </div>
      ) : (
        groupList
          .filter((data) => data.favorite)
          .map((data) => (
            <RouletteGroupButton
              key={data.groupId}
              primary={false}
              title={data.groupName}
              desc={data.newItem.map((menuData) => menuData.menu).join(', ')}
              onClick={() => console.log('하하')}
              rightText={null}
            />
          ))
      )}
    </>
  )
}

export default GroupRouletteList
