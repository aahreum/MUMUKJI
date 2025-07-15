import styles from './groupListCard.module.scss'
import { newItemDataTypes } from '@/types/groupDataTypes'
import FavoritesIcon from '@/assets/icons/groupList/favorites.svg?react'
import FavoritesFillIcon from '@/assets/icons/groupList/favorites_fill.svg?react'
import EditIcon from '@/assets/icons/groupList/edit.svg?react'
import TrashIcon from '@/assets/icons/groupList/trash.svg?react'
import { Link } from 'react-router-dom'

interface groupListCardProps {
  groupId: number
  groupName: string
  menu: newItemDataTypes[]
  favorite: boolean
  favoriteGroup: () => void
  removeGroup: () => void
}

const GroupListCard = ({ groupId, groupName, menu, favorite, favoriteGroup, removeGroup }: groupListCardProps) => {
  return (
    <div className={styles.container}>
      <button type="button" onClick={favoriteGroup}>
        {favorite ? <FavoritesFillIcon /> : <FavoritesIcon />}
      </button>
      <div className={styles.textArea}>
        <p className={styles.title}>{groupName}</p>
        <p className={styles.desc}>{menu.map((item) => item.menu).join(', ')}</p>
      </div>
      <Link to={`/group/${groupId}`}>
        <EditIcon />
      </Link>
      <button type="button" onClick={removeGroup}>
        <TrashIcon />
      </button>
    </div>
  )
}

export default GroupListCard
