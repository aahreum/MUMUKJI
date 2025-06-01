import styles from './groupList.module.scss'
import { menuListDataTypes } from '@/types/groupDataTypes'
import useGroup from '@/hooks/useGroup'
import GroupListCard from '@/components/group/groupList/groupListCard/GroupListCard'
import BasicModal from '@/components/common/modal/BasicModal'

const GroupList = ({ data }: { data: menuListDataTypes[] }) => {
  const { isFavorite, favoriteGroup, isFavoriteLimitModalOpen, setIsFavoriteLimitModalOpen, removeGroup } = useGroup()

  return (
    <>
      {isFavoriteLimitModalOpen && (
        <BasicModal
          modalType="alert"
          title={
            <>
              그룹 즐겨찾기는 <br /> 최대 3개까지 할 수 있어요.
            </>
          }
          desc={
            <>
              기존 즐겨찾기를 해제하고,
              <br /> 새로운 그룹을 즐겨찾기하세요.
            </>
          }
          firstBtnLabel="확인"
          firstBtnOnClick={() => setIsFavoriteLimitModalOpen(false)}
        />
      )}
      <div className={styles.container}>
        <p className={styles.groupLength}>
          그룹
          <span className={styles.acc}>
            {data.length}
            <span className={styles.max}>/20</span>
          </span>
        </p>
        {data.map((item: menuListDataTypes) => (
          <GroupListCard
            key={item.groupId}
            groupName={item.groupName}
            menu={item.newItem}
            favorite={isFavorite[item.groupId] || false}
            favoriteGroup={() => favoriteGroup(item.groupId)}
            removeGroup={() => removeGroup(item.groupId)}
          />
        ))}
      </div>
    </>
  )
}

export default GroupList
