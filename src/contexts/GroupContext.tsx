import { createContext, useEffect, useState, ReactNode } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { newItemDataTypes } from '@/types/groupDataTypes'

interface GroupContextType {
  groupId: number
  groupName: string
  menuList: newItemDataTypes[]
  addGroup: () => void
  addMenu: (item: newItemDataTypes) => string | null
  removeMenu: (id: number) => void
  updateGroupName: (name: string) => void
  saveDataToLocalStorage: () => void
  resetData: () => void
  isSaving: boolean
}

export const GroupContext = createContext<GroupContextType | undefined>(undefined)

export const GroupProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const urlGroupId = Number(id)
  const [groupId, setGroupId] = useState<number>(urlGroupId || 0)
  const [groupName, setGroupName] = useState<string>('')
  const [menuList, setMenuList] = useState<newItemDataTypes[]>([])
  const [isSaving, setIsSaving] = useState<boolean>(false)

  useEffect(() => {
    const storedData = localStorage.getItem('menuList')
    const storedGroups = storedData ? JSON.parse(storedData) : {}

    if (!urlGroupId) {
      const groupIds = Object.keys(storedGroups).map(Number)
      const maxGroupId = groupIds.length > 0 ? Math.max(...groupIds) : 0
      setGroupId(maxGroupId)
    } else {
      const group = storedGroups[urlGroupId]
      if (group) {
        setGroupName(group.groupName)
        setMenuList(group.menu || [])
      } else {
        setGroupName(`그룹 ${urlGroupId < 10 ? `0${urlGroupId}` : urlGroupId}`)
      }
    }
  }, [urlGroupId])

  const addGroup = () => {
    const newGroupId = groupId + 1
    setGroupId(newGroupId)
    navigate(`/group/${newGroupId}`)
  }

  const addMenu = (item: newItemDataTypes): string | null => {
    const isMenuExist = menuList.some((m) => m.menu === item.menu)
    if (isMenuExist) {
      return '같은 이름의 목록이 존재합니다. 다시 입력해주세요.'
    }
    setMenuList((prev) => [...prev, item])
    return null
  }

  const removeMenu = (id: number) => {
    setMenuList((prev) => prev.filter((item) => item.id !== id))
  }

  const updateGroupName = (name: string) => setGroupName(name)

  const resetData = () => {
    setGroupName(`그룹 ${urlGroupId < 10 ? `0${urlGroupId}` : urlGroupId}`)
    setMenuList([])
  }

  const saveDataToLocalStorage = () => {
    setIsSaving(true)
    const storedData = localStorage.getItem('menuList')
    const storedGroups = storedData ? JSON.parse(storedData) : {}

    if (!storedGroups[urlGroupId]) {
      storedGroups[urlGroupId] = { menu: [], favorite: false }
    }

    storedGroups[urlGroupId].groupName = groupName
    storedGroups[urlGroupId].menu = menuList
    localStorage.setItem('menuList', JSON.stringify(storedGroups))

    resetData()

    setTimeout(() => {
      navigate('/group')
      setIsSaving(false)
    }, 0)
  }

  return (
    <GroupContext.Provider
      value={{
        groupId,
        groupName,
        menuList,
        addGroup,
        addMenu,
        removeMenu,
        updateGroupName,
        saveDataToLocalStorage,
        resetData,
        isSaving,
      }}
    >
      {children}
    </GroupContext.Provider>
  )
}
