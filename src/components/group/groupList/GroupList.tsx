import { menuListDataTypes } from '@/types/groupDataTypes'
import styles from './groupList.module.scss'
import GroupListCard from '@/components/group/groupList/groupListCard/GroupListCard'

const GroupList = ({ data }: { data: menuListDataTypes[] }) => {
  return (
    <div className={styles.container}>
      {data.map((item: menuListDataTypes) => (
        <GroupListCard key={item.groupId} groupName={item.groupName} menu={item.newItem} favorite={item.favorite} />
      ))}
    </div>
  )
}

export default GroupList
