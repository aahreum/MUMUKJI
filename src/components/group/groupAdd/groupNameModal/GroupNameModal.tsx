import styles from './groupNameModal.module.scss'
import useTextfield from '@/hooks/useTextfield'
import ModalPotal from '@/components/common/modal/ModalPotal'
import ModalDimmed from '@/components/common/modal/ModalDimmed'
import Textfield from '@/components/common/textfield/Textfield'
import Button from '@/components/common/button/Button'

interface groupNameModalProps {
  closeModal: () => void
  updateGroupName: (newName: string) => void
}

const GroupNameModal = ({ closeModal, updateGroupName }: groupNameModalProps) => {
  const { textfield, handleInputChange, handleInputDelete } = useTextfield('groupName')

  const handleCloseModal = () => {
    handleInputDelete()
    closeModal()
  }
  const handleSaveGroupName = () => {
    updateGroupName(textfield)
    handleInputDelete()
    closeModal()
  }

  return (
    <ModalPotal>
      <ModalDimmed />
      <div className={styles.container}>
        <p className={styles.title}>그룹이름</p>
        <Textfield styleType="outline" placeholder="그룹명을 입력하세요." value={textfield} onChange={handleInputChange} handleInputDelete={handleInputDelete} />
        <div className={styles.buttonArea}>
          <Button label="닫기" styleType="outline" roundType="square" color="tertiary" size="s" onClick={handleCloseModal} />
          <Button label="완료" styleType="solid" roundType="square" color="secondary" size="s" disabled={textfield.length === 0} onClick={handleSaveGroupName} />
        </div>
      </div>
    </ModalPotal>
  )
}

export default GroupNameModal
