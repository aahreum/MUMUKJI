import Header from '@/components/common/header/Header'
import GroupAddForm from '@/components/group/groupAdd/groupAddForm/GroupAddForm'
import GroupList from '@/components/group/groupList/GroupList'
import GroupListEmpty from '@/components/group/groupList/groupListEmpty/GroupListEmpty'
import { groupDataTypes } from '@/types/groupDataTypes'

const Group = () => {
  const data: groupDataTypes[] = [
    { id: 0, title: '서울 사무실 점심', menu: '홍콩반점, 김밥천국, 왕족발보쌈, 신전떡볶이, 홍콩반점, 김밥천국, 왕족발보쌈, 신전떡볶이', favorites: true },
    { id: 1, title: '자취집 만원 이하 식당', menu: '홍콩반점, 김밥천국, 왕족발보쌈, 신전떡볶이, 홍콩반점, 김밥천국, 왕족발보쌈, 신전떡볶이', favorites: false },
  ]
  return (
    <>
      <Header title="그룹 목록" />
      {data.length === 0 ? (
        <GroupListEmpty />
      ) : (
        <>
          <GroupList data={data} />
          <GroupAddForm />
        </>
      )}
    </>
  )
}

export default Group
