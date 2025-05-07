import styles from './groupAddForm.module.scss'
import { useEffect, useState } from 'react'
import useGroup from '@/hooks/useGroup'
import AddIcon from '@/assets/icons/add.svg?react'
import CheckIcon from '@/assets/icons/check.svg?react'
import Button from '@/components/common/button/Button'
import SelectedBox from '@/components/group/groupAdd/selectedBox/SelectedBox'
import useTextfield from '@/hooks/useTextfield'
import Textfield from '@/components/common/textfield/Textfield'

const GroupAddForm = () => {
  const { textfield, handleInputChange, handleInputDelete } = useTextfield('menu')
  const [selectedItem, setSelectedItem] = useState<string>('')
  const { addMenu, menuList } = useGroup()
  const [showGroupAddForm, setShowGroupAddForm] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    if (menuList.length === 20) {
      setShowGroupAddForm(false)
    }
  }, [menuList])

  const formatGroupNumber = (id: number) => {
    return `${id < 10 ? `0${id}` : id}`
  }

  const handleSaveMenu = (e: React.FormEvent) => {
    e.preventDefault()
    const result = addMenu({ id: Date.now(), theme: selectedItem, menu: textfield })

    if (result) {
      setError(result)
    } else {
      setError('')
      handleInputDelete()
      setSelectedItem('')
    }
  }

  const handleTextfieldDelete = () => {
    setError('')
    handleInputDelete()
  }

  return (
    <>
      <div className={styles.formTopContainer}>
        <div className={styles.menuListCountArea}>
          <span>메뉴 목록</span>
          <span className={styles.menuListCountAcc}>{formatGroupNumber(menuList.length)}</span>
        </div>
        {menuList.length === 20 ? (
          <div className={styles.finishMsg}>
            <CheckIcon />
            20개 완료
          </div>
        ) : (
          <Button
            icon={<AddIcon width={16} height={16} />}
            label="메뉴 추가"
            color="secondary"
            disabled={showGroupAddForm === true}
            size="s"
            roundType="square"
            onClick={() => {
              setShowGroupAddForm(true)
              handleInputDelete()
              setSelectedItem('')
              setError('')
            }}
          />
        )}
      </div>
      {showGroupAddForm && (
        <form className={styles.formContainer} onSubmit={handleSaveMenu}>
          <SelectedBox selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          <Textfield styleType="underline" placeholder="가게 또는 메뉴를 입력해주세요." value={textfield} onChange={handleInputChange} handleInputDelete={handleTextfieldDelete} />
          <div className={styles.formBottomArea}>
            {error && <p className={styles.formErrorMsg}>{error}</p>}
            <div className={styles.buttonArea}>
              {menuList.length > 0 && <Button label="취소" styleType="outline" roundType="square" size="xs" color="tertiary" onClick={() => setShowGroupAddForm(false)} />}
              <Button type="submit" label="완료" roundType="square" size="xs" color="secondary" disabled={selectedItem === '' || textfield.length === 0} />
            </div>
          </div>
        </form>
      )}
    </>
  )
}

export default GroupAddForm
