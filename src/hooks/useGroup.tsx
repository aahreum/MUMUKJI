import { useNavigate, useParams } from 'react-router-dom'
import { newItemDataTypes } from '@/types/groupDataTypes'
import { useEffect, useState } from 'react'

const useGroup = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const urlGroupId = Number(id)
  const [groupId, setGroupId] = useState<number>(urlGroupId || 0)

  useEffect(() => {
    if (!urlGroupId) {
      const storedData = localStorage.getItem('menuList')
      const storedGroups = storedData ? JSON.parse(storedData) : {}
      const groupIds = Object.keys(storedGroups).map(Number)

      const maxGroupId = groupIds.length > 0 ? Math.max(...groupIds) : 0
      setGroupId(maxGroupId)
    }
  }, [urlGroupId])

  const addGroup = () => {
    const newGroupId = groupId + 1
    setGroupId(newGroupId)
    navigate(`/group/${newGroupId}`)
  }

  const saveMenu = ({ id, theme, menu }: newItemDataTypes) => {
    const storedData = localStorage.getItem('menuList')
    const storedGroups = storedData ? JSON.parse(storedData) : {}

    if (!storedGroups[urlGroupId]) {
      storedGroups[urlGroupId] = { menu: [], favorite: false }
    }

    storedGroups[urlGroupId].menu.push({ id, theme, menu })

    localStorage.setItem('menuList', JSON.stringify(storedGroups))
  }

  return { groupId, addGroup, saveMenu }
}

export default useGroup
