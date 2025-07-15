import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react'
import styles from './selectedBox.module.scss'
import ArrowIcon from '@/assets/icons/groupList/arrow_down.svg?react'
import MAIN_MENU_LIST from '@/constants/mainMenuList'
import ModalPotal from '@/components/common/modal/ModalPotal'
import ModalDimmed from '@/components/common/modal/ModalDimmed'

interface selectedBoxProps {
  selectedItem: string
  setSelectedItem: Dispatch<SetStateAction<string>>
}

const SelectedBox = ({ selectedItem, setSelectedItem }: selectedBoxProps) => {
  const selectBoxListRef = useRef<HTMLDivElement | null>(null)
  const [isOpened, setIsOpened] = useState(false)

  const closeModal = useCallback(() => {
    document.body.style.overflow = 'auto'
    setIsOpened(false)
  }, [])

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (selectBoxListRef.current && !selectBoxListRef.current.contains(e.target as Node)) {
        closeModal()
      }
    },
    [closeModal],
  )

  const handleOpen = useCallback(() => {
    setIsOpened(true)
  }, [])

  const handleSelectedItem = useCallback(
    (item: string) => {
      setSelectedItem(item)
      closeModal()
    },
    [closeModal, setSelectedItem],
  )

  useEffect(() => {
    if (isOpened) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpened, handleClickOutside])

  useEffect(() => {
    document.body.style.overflow = isOpened ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpened])

  return (
    <>
      <button type="button" className={styles.selectedBox} onClick={handleOpen}>
        <p>{selectedItem === '' ? '종류 선택' : selectedItem}</p> <ArrowIcon />
      </button>
      {isOpened && (
        <ModalPotal>
          <ModalDimmed />
          <div className={styles.menuList} ref={selectBoxListRef}>
            {MAIN_MENU_LIST.map((item) => (
              <button className={`${styles.menu} ${selectedItem === item.theme && styles.selectedMenu}`} key={item.id} type="button" onClick={() => handleSelectedItem(item.theme)}>
                {item.theme}
              </button>
            ))}
          </div>
        </ModalPotal>
      )}
    </>
  )
}

export default SelectedBox
