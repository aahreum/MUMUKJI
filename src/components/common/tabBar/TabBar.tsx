import styles from './tabBar.module.scss'
import TabBarButton from './TabBarButton'
import RiceIcon from '@/assets/icons/rice.svg?react'
import HomeIcon from '@/assets/icons/home.svg?react'
import EditGroupIcon from '@/assets/icons/edit_group.svg?react'

export interface tabMenuProps {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  menu: string
  url: string
}

const TabBar = () => {
  const tabMenu: tabMenuProps[] = [
    {
      icon: RiceIcon,
      menu: '머먹었더라?',
      url: '/list',
    },
    {
      icon: HomeIcon,
      menu: '홈',
      url: '/',
    },
    {
      icon: EditGroupIcon,
      menu: '그룹 목록',
      url: '/edit',
    },
  ]

  return (
    <div className={styles.bgArea}>
      <div className={styles.container}>
        {tabMenu.map((item) => (
          <TabBarButton key={item.menu} icon={item.icon} menu={item.menu} url={item.url} />
        ))}
      </div>
    </div>
  )
}

export default TabBar
