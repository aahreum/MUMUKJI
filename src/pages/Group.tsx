import useGroup from '@/hooks/useGroup'
import Header from '@/components/common/header/Header'
import GroupAddButton from '@/components/group/groupAdd/groupAddButton/GroupAddButton'
import GroupList from '@/components/group/groupList/GroupList'
import GroupListEmpty from '@/components/group/groupList/groupListEmpty/GroupListEmpty'
import Tooltip from '@/components/common/tooltip/Tooltip'
import Toggle from '@/components/common/toggle/Toggle'

const Group = () => {
  const { groupList } = useGroup()

  return (
    <>
      <Header title="그룹 목록" />
      <Tooltip color={'primary'} text={'안녕허세요?????????'} position={'top-right'} />
      {groupList.length === 0 ? (
        <GroupListEmpty />
      ) : (
        <>
          <GroupList data={groupList} />
        </>
      )}
      <GroupAddButton />
      <Toggle />
    </>
  )
}

export default Group
