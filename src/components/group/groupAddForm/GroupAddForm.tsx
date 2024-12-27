import Button from '@/components/common/button/Button'
import styles from './groupAddForm.module.scss'
import SelectedBox from '../selectedBox/SelectedBox'
import CloseCircleIcon from '@/assets/icons/groupList/close_circle.svg?react'
import { useState } from 'react'

const GroupAddForm = () => {
  const [menu, setMenu] = useState('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMenu(e.target.value)
  }
  const handleInputDelete = () => {
    setMenu('')
  }
  return (
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
  )
}

export default GroupAddForm
