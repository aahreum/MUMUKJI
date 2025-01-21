import { groupDataTypes } from '@/types/groupDataTypes'
import styles from './groupList.module.scss'
import GroupListCard from '@/components/group/groupList/groupListCard/GroupListCard'

const GroupList = ({ data }: { data: groupDataTypes[] }) => {
  return (
    <div className={styles.container}>
      {data.map((item: groupDataTypes) => (
        <GroupListCard key={item.id} title={item.title} menu={item.menu} favorites={item.favorites} />
      ))}
    </div>
  )
}

export default GroupList
