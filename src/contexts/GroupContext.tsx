import { createContext, useEffect, useState, ReactNode, SetStateAction, Dispatch } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { menuListDataTypes, newItemDataTypes, storedGroupData } from '@/types/groupDataTypes'

interface GroupContextType {
  groupId: number
  groupName: string
  menuList: newItemDataTypes[]
  groupList: menuListDataTypes[]
  favoriteGroup: (targetId: number) => void
  addGroup: () => void
  removeGroup: (targetId: number) => void
  confirmRemove: () => void
  cancelRemoveGroup: () => void
  addMenu: (item: newItemDataTypes) => string | null
  removeMenu: (id: number) => void
  updateGroupName: (name: string) => void
  saveDataToLocalStorage: () => void
  resetData: () => void
  isSaving: boolean
  isFavorite: Record<number, boolean>
  isFavoriteLimitModalOpen: boolean
  setIsFavoriteLimitModalOpen: Dispatch<SetStateAction<boolean>>
  isConfirmModalOpen: boolean
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
  const [storedGroups, setStoredGroups] = useState<Record<number, storedGroupData>>({})
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false)
  const [pendingRemoveId, setPendingRemoveId] = useState<number | null>(null)

  useEffect(() => {
    const storedData = localStorage.getItem('menuList')
    const parsedData: Record<number, storedGroupData> = storedData ? JSON.parse(storedData) : {}
    setStoredGroups(parsedData)

    const favorites: Record<number, boolean> = {}
    for (const key in parsedData) {
      const numericKey = Number(key)
      favorites[numericKey] = parsedData[numericKey].favorite || false
    }
    setIsFavorite(favorites)

    if (urlGroupId) {
      const group = parsedData[urlGroupId]
      if (group) {
        setGroupName(group.groupName)
        setMenuList(group.menu || [])
      } else {
        setGroupName(`그룹 ${urlGroupId < 10 ? `0${urlGroupId}` : urlGroupId}`)
        setMenuList([])
      }
      setGroupId(urlGroupId)
    } else {
      const groupIds = Object.keys(parsedData).map(Number)
      const maxGroupId = groupIds.length > 0 ? Math.max(...groupIds) : 0
      setGroupId(maxGroupId)
      setGroupName(`그룹 ${maxGroupId < 10 ? `0${maxGroupId + 1}` : maxGroupId + 1}`)
      setMenuList([])
    }
  }, [urlGroupId])

  const groupList: menuListDataTypes[] = Object.entries(storedGroups)
    .map(([key, value]) => ({
      groupId: parseInt(key),
      groupName: value.groupName,
      favorite: value.favorite,
      newItem: value.menu,
    }))
    .sort((a, b) => {
      if (a.favorite && !b.favorite) return -1
      if (!a.favorite && b.favorite) return 1
      return b.groupId - a.groupId
    })

  const updateLocalStorage = (updatedFavorites: Record<number, boolean>, targetId: number) => {
    const data = localStorage.getItem('menuList')
    const parsedData: Record<number, storedGroupData> = data ? JSON.parse(data) : {}
    if (parsedData[targetId]) {
      parsedData[targetId].favorite = updatedFavorites[targetId]
      localStorage.setItem('menuList', JSON.stringify(parsedData))
      setStoredGroups(parsedData)
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
    const maxId = Math.max(0, ...Object.keys(storedGroups).map(Number))
    const newGroupId = maxId + 1
    setGroupId(newGroupId)
    navigate(`/group/${newGroupId}`)
  }

  const removeGroup = (targetGroupId: number) => {
    setPendingRemoveId(targetGroupId)
    setIsConfirmModalOpen(true)
  }

  const confirmRemove = () => {
    if (pendingRemoveId === null) return

    setStoredGroups((prev) => {
      if (!(pendingRemoveId in prev)) return prev
      const updated = { ...prev }
      delete updated[pendingRemoveId]
      localStorage.setItem('menuList', JSON.stringify(updated))
      return updated
    })

    setIsFavorite((favPrev) => {
      const updatedFav = { ...favPrev }
      delete updatedFav[pendingRemoveId]
      return updatedFav
    })
    setIsConfirmModalOpen(false)
  }

  const cancelRemoveGroup = () => {
    setPendingRemoveId(null)
    setIsConfirmModalOpen(false)
  }

  const addMenu = (item: newItemDataTypes): string | null => {
    if (menuList.some((m) => m.menu === item.menu)) {
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
    const data = localStorage.getItem('menuList')
    const parsedData: Record<number, storedGroupData> = data ? JSON.parse(data) : {}

    parsedData[urlGroupId] = {
      groupName,
      menu: menuList,
      favorite: isFavorite[urlGroupId] || false,
    }

    localStorage.setItem('menuList', JSON.stringify(parsedData))
    setStoredGroups(parsedData)
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
        groupList,
        favoriteGroup,
        addGroup,
        removeGroup,
        confirmRemove,
        cancelRemoveGroup,
        addMenu,
        removeMenu,
        updateGroupName,
        saveDataToLocalStorage,
        resetData,
        isSaving,
        isFavorite,
        isFavoriteLimitModalOpen,
        setIsFavoriteLimitModalOpen,
        isConfirmModalOpen,
      }}
    >
      {children}
    </GroupContext.Provider>
  )
}
