import styles from './groupAddForm.module.scss'
import useModal from '@/hooks/useModal'
import Button from '@/components/common/button/Button'
import SelectedBox from '@/components/group/groupAdd/selectedBox/SelectedBox'
import GroupNameModal from '@/components/group/groupAdd/groupNameModal/GroupNameModal'
import useTextfield from '@/hooks/useTextfield'
import Textfield from '@/components/common/textfield/Textfield'

const GroupAddForm = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const { textfield, handleInputChange, handleInputDelete } = useTextfield('menu')

  return (
    <>
      {isOpen && <GroupNameModal closeModal={closeModal} />}
      <div className={styles.container}>
        <SelectedBox />
        <Textfield styleType="underline" placeholder="가게 또는 메뉴를 입력해주세요." value={textfield} onChange={handleInputChange} handleInputDelete={handleInputDelete} />
        <div className={styles.buttonArea}>
          <Button label="취소" styleType="outline" roundType="square" size="xs" color="tertiary" />
          <Button label="완료" roundType="square" size="xs" color="secondary" disabled={textfield.length === 0} />
        </div>
      </div>
      <button onClick={openModal}>모달확인</button>
    </>
  )
}

export default GroupAddForm
