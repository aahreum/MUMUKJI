import styles from './groupAddHeader.module.scss'
import { useNavigate } from 'react-router'
import useModal from '@/hooks/useModal'
import useGroup from '@/hooks/useGroup'
import EditIcon from '@/assets/icons/edit.svg?react'
import GroupNameModal from '@/components/group/groupAdd/groupNameModal/GroupNameModal'

const GroupAddHeader = () => {
  const navigate = useNavigate()
  const { isOpen, openModal, closeModal } = useModal('groupModal')
  const { groupName, updateGroupName, saveDataToLocalStorage, menuList } = useGroup()

  const handleBackButton = () => {
    navigate(-1)
  }
  return (
    <>
      {isOpen && <GroupNameModal closeModal={closeModal} updateGroupName={updateGroupName} />}
      <div className={styles.container}>
        <button className={styles.controlButton} onClick={handleBackButton}>
          취소
        </button>
        <button className={styles.editButton} onClick={openModal}>
          {groupName}
          <EditIcon />
        </button>
        <button className={`${styles.controlButton} ${styles.saveButton}`} disabled={menuList.length === 0} onClick={saveDataToLocalStorage}>
          저장
        </button>
      </div>
    </>
  )
}

export default GroupAddHeader
