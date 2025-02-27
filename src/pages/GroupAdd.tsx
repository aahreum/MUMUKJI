import styles from '@/styles/pages/groupAdd.module.scss'
import useModal from '@/hooks/useModal'
import AddIcon from '@/assets/icons/add.svg?react'
import EditIcon from '@/assets/icons/edit.svg?react'
import GroupAddForm from '@/components/group/groupAdd/groupAddForm/GroupAddForm'
import Button from '@/components/common/button/Button'
import GroupNameModal from '@/components/group/groupAdd/groupNameModal/GroupNameModal'

const GroupAdd = () => {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <>
      {isOpen && <GroupNameModal closeModal={closeModal} />}
      <div className={styles.groupNameContainer}>
        <button className={styles.groupNameControlButton}>취소</button>
        <button className={styles.groupNameEditButton} onClick={openModal}>
          그룹 01
          <EditIcon />
        </button>
        <button disabled className={styles.groupNameControlButton}>
          저장
        </button>
      </div>
      <div className={styles.formTopContainer}>
        <div className={styles.menuListCountArea}>
          <span>메뉴 목록</span>
          <span className={styles.menuListCountAcc}>00</span>
        </div>
        <Button icon={<AddIcon width={16} height={16} />} label="메뉴 추가" color="secondary" disabled size="s" roundType="square" />
      </div>
      <GroupAddForm />
    </>
  )
}

export default GroupAdd
