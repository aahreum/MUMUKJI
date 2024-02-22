import { NavLink } from 'react-router-dom'
import styles from './tabbarButton.module.scss'
import { tabMenuProps } from './TabBar'

const TabBarButton = ({ icon, menu, url }: tabMenuProps): React.ReactElement => {
  const IconComponent = icon

  return (
    <NavLink to={url} className={({ isActive }) => `${styles.container} ${isActive && styles.active}`}>
      <IconComponent />
      <p className={styles.buttonText}>{menu}</p>
    </NavLink>
  )
}

export default TabBarButton
