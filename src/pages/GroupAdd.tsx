import { useMemo, useRef } from 'react'
import useGroup from '@/hooks/useGroup'
import GroupAddHeader from '@/components/group/groupAdd/GroupAddHeader/GroupAddHeader'
import GroupAddForm from '@/components/group/groupAdd/groupAddForm/GroupAddForm'
import MenuList from '@/components/group/groupAdd/menuList/MenuList'
import usePrompt from '@/hooks/usePrompt'

const GroupAdd = () => {
  const { groupName, menuList, resetData } = useGroup()
  const initialGroupNameRef = useRef(groupName)

  const isDirty = useMemo(() => {
    return groupName !== initialGroupNameRef.current || menuList.length > 0
  }, [groupName, menuList])

  usePrompt(isDirty, '변경된 내용이 있습니다. 정말로 나가시겠습니까?', resetData)

  return (
    <>
      <GroupAddHeader />
      <GroupAddForm />
      <MenuList />
    </>
  )
}

export default GroupAdd
