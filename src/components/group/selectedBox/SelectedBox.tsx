import { useState } from 'react'
import styles from './selectedBox.module.scss'
import ArrowIcon from '@/assets/icons/groupList/arrow_down.svg?react'
import MAIN_MENU_LIST from '@/constants/mainMenuList'
import ModalPotal from '@/components/common/modal/ModalPotal'
import ModalDimmed from '@/components/common/modal/ModalDimmed'

const SelectedBox = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [selectedItem, setSelectedItem] = useState<null | string>(null)
  const handleOpen = () => {
    document.body.style.overflow = 'hidden'
    setIsOpened(true)
  }
  const handleClose = () => {
    document.body.style.overflow = 'auto'
    setIsOpened(false)
  }
  const handleSelectedItem = (item: string) => {
    setSelectedItem(item)
    handleClose()
  }
  return (
    <>
      <button type="button" className={styles.selectedBox} onClick={handleOpen}>
        <p>{selectedItem === null ? '종류 선택' : selectedItem}</p> <ArrowIcon />
      </button>
      {isOpened && (
        <ModalPotal>
          <ModalDimmed onClick={handleClose} />
          <div className={styles.menuList}>
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
