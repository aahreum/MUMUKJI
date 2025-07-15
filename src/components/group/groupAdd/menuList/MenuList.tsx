import styles from './menuList.module.scss'
import useGroup from '@/hooks/useGroup'
import THEME_ICON_MAP from '@/constants/themeIconMap'
import TrashIcon from '@/assets/icons/groupList/trash.svg?react'

const MenuList = () => {
  const { menuList, removeMenu } = useGroup()
  const getThemeIcon = (theme: string) => {
    return THEME_ICON_MAP[theme]
  }

  return (
    <ul className={styles.container}>
      {[...menuList]
        .sort((a, b) => b.id - a.id)
        .map((item) => (
          <li className={styles.list} key={item.id}>
            <img src={getThemeIcon(item.theme)} alt={item.theme} width={32} height={32} />
            <div className={styles.textArea}>
              <p className={styles.theme}>{item.theme}</p>
              <p className={styles.menu}>{item.menu}</p>
            </div>
            <button
              type="button"
              onClick={() => {
                removeMenu(item.id)
              }}
            >
              <TrashIcon />
            </button>
          </li>
        ))}
    </ul>
  )
}

export default MenuList
