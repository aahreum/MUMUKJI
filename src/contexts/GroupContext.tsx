import { createContext, useEffect, useState, ReactNode, SetStateAction, Dispatch } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { newItemDataTypes } from '@/types/groupDataTypes'

interface GroupContextType {
  groupId: number
  groupName: string
  menuList: newItemDataTypes[]
  favoriteGroup: (targetId: number) => void
  addGroup: () => void
  removeGroup: () => void
  addMenu: (item: newItemDataTypes) => string | null
  removeMenu: (id: number) => void
  updateGroupName: (name: string) => void
  saveDataToLocalStorage: () => void
  resetData: () => void
  isSaving: boolean
  isFavorite: Record<number, boolean>
  isFavoriteLimitModalOpen: boolean
  setIsFavoriteLimitModalOpen: Dispatch<SetStateAction<boolean>>
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
  const [isFavorite, setIsFavorite] = useState<Record<number, boolean>>({})
  const [isFavoriteLimitModalOpen, setIsFavoriteLimitModalOpen] = useState<boolean>(false)

  useEffect(() => {
    const storedData = localStorage.getItem('menuList')
    const storedGroups = storedData ? JSON.parse(storedData) : {}

    const favorites: Record<number, boolean> = {}
    for (const key in storedGroups) {
      favorites[Number(key)] = storedGroups[key].favorite || false
    }
    setIsFavorite(favorites)

    if (urlGroupId) {
      const group = storedGroups[urlGroupId]
      if (group) {
        setGroupName(group.groupName)
        setMenuList(group.menu || [])
      } else {
        setGroupName(`그룹 ${urlGroupId < 10 ? `0${urlGroupId}` : urlGroupId}`)
        setMenuList([])
      }
    } else {
      const groupIds = Object.keys(storedGroups).map(Number)
      const maxGroupId = groupIds.length > 0 ? Math.max(...groupIds) : 0
      setGroupId(maxGroupId)
      setGroupName(`그룹 ${maxGroupId < 10 ? `0${maxGroupId + 1}` : maxGroupId + 1}`)
      setMenuList([])
    }
  }, [urlGroupId])

  const updateLocalStorage = (updatedFavorites: Record<number, boolean>, targetId: number) => {
    const storedData = localStorage.getItem('menuList')
    const storedGroups = storedData ? JSON.parse(storedData) : {}
    if (storedGroups[targetId]) {
      storedGroups[targetId].favorite = updatedFavorites[targetId]
      localStorage.setItem('menuList', JSON.stringify(storedGroups))
    }
  }

  const favoriteGroup = (targetId: number) => {
    setIsFavorite((prev) => {
      const isCurrentlyFavorite = prev[targetId] || false
      const currentFavoriteCount = Object.values(prev).filter(Boolean).length

      if (isCurrentlyFavorite) {
        const updated = { ...prev, [targetId]: false }
        updateLocalStorage(updated, targetId)
        return updated
      }

      if (currentFavoriteCount >= 3) {
        setIsFavoriteLimitModalOpen(true)
        return prev
      }

      const updated = { ...prev, [targetId]: true }
      updateLocalStorage(updated, targetId)
      return updated
    })
  }

  const addGroup = () => {
    const newGroupId = groupId + 1
    setGroupId(newGroupId)
    navigate(`/group/${newGroupId}`)
  }

  const removeGroup = () => {}

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
        favoriteGroup,
        addGroup,
        removeGroup,
        addMenu,
        removeMenu,
        updateGroupName,
        saveDataToLocalStorage,
        resetData,
        isSaving,
        isFavorite,
        isFavoriteLimitModalOpen,
        setIsFavoriteLimitModalOpen,
      }}
    >
      {children}
    </GroupContext.Provider>
  )
}
