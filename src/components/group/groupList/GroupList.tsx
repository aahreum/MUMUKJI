import styles from './groupList.module.scss'
import { menuListDataTypes } from '@/types/groupDataTypes'
import GroupListCard from '@/components/group/groupList/groupListCard/GroupListCard'

const GroupList = ({ data }: { data: menuListDataTypes[] }) => {
  return (
    <div className={styles.container}>
      <p className={styles.groupLength}>
        그룹 <span className={styles.acc}>{data.length}</span>
      </p>
      {data.map((item: menuListDataTypes) => (
        <GroupListCard key={item.groupId} groupName={item.groupName} menu={item.newItem} favorite={item.favorite} />
      ))}
    </div>
  )
}

export default GroupList
