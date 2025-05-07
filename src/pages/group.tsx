import { menuListDataTypes, storedGroupData } from '@/types/groupDataTypes'
import Header from '@/components/common/header/Header'
import GroupAddButton from '@/components/group/groupAdd/groupAddButton/GroupAddButton'
import GroupList from '@/components/group/groupList/GroupList'
import GroupListEmpty from '@/components/group/groupList/groupListEmpty/GroupListEmpty'

const Group = () => {
  const rawData = localStorage.getItem('menuList')
  let dataArray: menuListDataTypes[] = []

  if (rawData) {
    const parsedData: Record<string, storedGroupData> = JSON.parse(rawData)
    dataArray = Object.entries(parsedData).map(([key, value]) => ({
      groupId: parseInt(key),
      groupName: value.groupName,
      favorite: value.favorite,
      newItem: value.menu,
    }))
  }

  return (
    <>
      <Header title="그룹 목록" />
      {dataArray.length === 0 ? (
        <GroupListEmpty />
      ) : (
        <>
          <GroupList data={dataArray} />
        </>
      )}
      <GroupAddButton />
    </>
  )
}

export default Group
