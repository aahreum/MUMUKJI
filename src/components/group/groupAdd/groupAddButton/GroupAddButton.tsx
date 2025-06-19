import styles from './groupAddButton.module.scss'
import useGroup from '@/hooks/useGroup'
import AddIcon from '@/assets/icons/add.svg?react'
import Button from '@/components/common/button/Button'
import { useEffect, useState } from 'react'

const GroupAddButton = () => {
  const { addGroup } = useGroup()
  const [hasMenuList, setHasMenuList] = useState(false)

  useEffect(() => {
    const storedData = localStorage.getItem('menuList')
    setHasMenuList(storedData?.length === 0 ? false : true)
  }, [])

  const isMainPage = location.pathname === '/'
  const buttonStyle = isMainPage ? (hasMenuList ? 'outline' : 'solid') : 'solid'
  const buttonColor = isMainPage ? (hasMenuList ? 'tertiary' : 'primary') : 'primary'

  return (
    <Button
      className={styles.container}
      styleType={buttonStyle}
      color={buttonColor}
      label={'그룹추가'}
      onClick={addGroup}
      size="m"
      icon={<AddIcon />}
      roundType="capsule"
      full={false}
    />
  )
}

export default GroupAddButton
