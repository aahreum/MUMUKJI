import styles from './groupAddForm.module.scss'
import { useState } from 'react'
import useGroup from '@/hooks/useGroup'
import AddIcon from '@/assets/icons/add.svg?react'
import Button from '@/components/common/button/Button'
import SelectedBox from '@/components/group/groupAdd/selectedBox/SelectedBox'
import useTextfield from '@/hooks/useTextfield'
import Textfield from '@/components/common/textfield/Textfield'

const GroupAddForm = () => {
  const { textfield, handleInputChange, handleInputDelete } = useTextfield('menu')
  const [selectedItem, setSelectedItem] = useState<string>('')
  const { addMenu, menuList } = useGroup()
  const [showGroupAddForm, setShowGroupAddForm] = useState(true)

  const formatGroupNumber = (id: number) => {
    return `${id < 10 ? `0${id}` : id}`
  }

  const handleSaveMenu = () => {
    const newItem = { id: Date.now(), theme: selectedItem, menu: textfield }
    addMenu(newItem)
    handleInputDelete()
    setSelectedItem('')
  }

  return (
    <>
      <div className={styles.formTopContainer}>
        <div className={styles.menuListCountArea}>
          <span>메뉴 목록</span>
          <span className={styles.menuListCountAcc}>{formatGroupNumber(menuList.length)}</span>
        </div>
        <Button
          icon={<AddIcon width={16} height={16} />}
          label="메뉴 추가"
          color="secondary"
          disabled={menuList.length === 0 && showGroupAddForm === true}
          size="s"
          roundType="square"
          onClick={() => {
            setShowGroupAddForm(true)
          }}
        />
      </div>
      {showGroupAddForm && (
        <div className={styles.formContainer}>
          <SelectedBox selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          <Textfield styleType="underline" placeholder="가게 또는 메뉴를 입력해주세요." value={textfield} onChange={handleInputChange} handleInputDelete={handleInputDelete} />
          <div className={styles.buttonArea}>
            {menuList.length > 0 && <Button label="취소" styleType="outline" roundType="square" size="xs" color="tertiary" onClick={() => setShowGroupAddForm(false)} />}
            <Button label="완료" roundType="square" size="xs" color="secondary" disabled={selectedItem === '' || textfield.length === 0} onClick={handleSaveMenu} />
          </div>
        </div>
      )}
    </>
  )
}

export default GroupAddForm
