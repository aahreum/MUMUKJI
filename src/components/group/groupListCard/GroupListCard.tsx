import styles from './groupListCard.module.scss'
import { groupListCardProps } from '@/types/groupDataTypes'
import FavoritesIcon from '@/assets/icons/groupList/favorites.svg?react'
import FavoritesFillIcon from '@/assets/icons/groupList/favorites_fill.svg?react'
import EditIcon from '@/assets/icons/groupList/edit.svg?react'
import TrashIcon from '@/assets/icons/groupList/trash.svg?react'

const GroupListCard = ({ title, menu, favorites }: groupListCardProps) => {
  return (
    <div className={styles.container}>
      <button type="button">{favorites === true ? <FavoritesFillIcon /> : <FavoritesIcon />}</button>
      <div className={styles.textArea}>
        <p className={styles.title}>{title}</p>
        <p className={styles.desc}>{menu}</p>
      </div>
      <button type="button">
        <EditIcon />
      </button>
      <button type="button">
        <TrashIcon />
      </button>
    </div>
  )
}

export default GroupListCard
