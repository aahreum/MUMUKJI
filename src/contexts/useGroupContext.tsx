import { useContext } from 'react'
import { GroupContext } from './GroupContext'

export const useGroupContext = () => {
  const context = useContext(GroupContext)
  if (!context) {
    throw new Error('useGroupContext는 GroupProvider 내에서 사용해야 합니다')
  }
  return context
}
