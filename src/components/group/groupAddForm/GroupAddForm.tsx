import Button from '@/components/common/button/Button'
import styles from './groupAddForm.module.scss'
import SelectedBox from '../selectedBox/SelectedBox'
import CloseCircleIcon from '@/assets/icons/groupList/close_circle.svg?react'
import { useState } from 'react'
import BasicModal from '@/components/common/modal/BasicModal'
import useModal from '@/hooks/useModal'

const GroupAddForm = () => {
  const { isOpen, openModal, closeModal } = useModal()
  const [menu, setMenu] = useState('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenu(e.target.value)
  }
  const handleInputDelete = () => {
    setMenu('')
  }
  return (
    <>
      {isOpen && <BasicModal modalType="alert" title={'모달 확인'} desc={'모달확인인인인인인인인인'} firstBtnLabel="확인" firstBtnOnClick={closeModal} />}
      <div className={styles.container}>
        <SelectedBox />
        <div className={styles.inputArea}>
          <input className={styles.input} type="text" placeholder="가게 또는 메뉴를 입력해주세요." maxLength={20} value={menu} onChange={handleInputChange} />
          {menu.length > 0 && (
            <button className={styles.inputDelBtn} type="button" onClick={handleInputDelete}>
              <CloseCircleIcon />
            </button>
          )}
          <p className={styles.textCount}>{menu.length}/20</p>
        </div>
        <div className={styles.buttonArea}>
          <Button label="취소" size="s" color="basic" />
          <Button label="완료" size="s" color="secondary" disabled />
        </div>
      </div>
      <button onClick={openModal}>모달확인</button>
    </>
  )
}

export default GroupAddForm
