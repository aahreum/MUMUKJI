import useGroup from '@/hooks/useGroup'
import Header from '@/components/common/header/Header'
import GroupAddButton from '@/components/group/groupAdd/groupAddButton/GroupAddButton'
import GroupList from '@/components/group/groupList/GroupList'
import GroupListEmpty from '@/components/group/groupList/groupListEmpty/GroupListEmpty'

const Group = () => {
  const { groupList } = useGroup()

  return (
    <>
      <Header title="그룹 목록" />
      {groupList.length === 0 ? (
        <GroupListEmpty />
      ) : (
        <>
          <GroupList data={groupList} />
        </>
      )}
      <GroupAddButton />
    </>
  )
}

export default Group
