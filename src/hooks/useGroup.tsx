import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const useGroup = () => {
  const navigate = useNavigate()
  const [groupId, setGroupId] = useState(0)

  useEffect(() => {
    const storedData = localStorage.getItem('menuList')
    const storedGroups = storedData ? JSON.parse(storedData) : {}
    const maxGroupId = Object.keys(storedGroups).length > 0 ? Math.max(...Object.keys(storedGroups).map(Number)) : 0
    setGroupId(maxGroupId)
  }, [])

  const addGroup = () => {
    const newGroupId = groupId + 1
    setGroupId(newGroupId)
    navigate(`/group/${newGroupId}`)
  }

  const saveMenu = (groupId: number, newItem: { id: number; theme: string; menu: string }) => {
    const storedData = localStorage.getItem('menuList')
    const storedGroups = storedData ? JSON.parse(storedData) : {}

    if (!storedGroups[groupId]) {
      storedGroups[groupId] = { menu: [] }
    }

    storedGroups[groupId].menu.push(newItem)
    localStorage.setItem('menuList', JSON.stringify(storedGroups))
  }

  return { groupId, addGroup, saveMenu }
}

export default useGroup
