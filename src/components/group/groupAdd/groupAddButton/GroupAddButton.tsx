import styles from './groupAddButton.module.scss'
import useGroup from '@/hooks/useGroup'
import AddIcon from '@/assets/icons/add.svg?react'
import Button from '@/components/common/button/Button'

const GroupAddButton = () => {
  const { addGroup, storedGroups } = useGroup()

  const isMainPage = location.pathname === '/'
  const buttonStyle = isMainPage ? (Object.keys(storedGroups).length !== 0 ? 'outline' : 'solid') : 'solid'
  const buttonColor = isMainPage ? (Object.keys(storedGroups).length !== 0 ? 'tertiary' : 'primary') : 'primary'

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
