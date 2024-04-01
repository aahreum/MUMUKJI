import { ChangeEvent, useState } from 'react'
import styles from './chooseMenuModal.module.scss'
import ModalPotal from '@/components/common/modal/ModalPotal'
import MAIN_MENU_LIST from '@/constants/mainMenuList'
import GoBackButton from '../common/goBackButton/GoBackButton'

interface chooseMenuModalType {
  closeModal: () => void
}

interface checkThemeType {
  [key: string]: boolean
}

const ChooseMenuModal = ({ closeModal }: chooseMenuModalType) => {
  const [checkedTheme, setCheckedTheme] = useState<checkThemeType>({})
  const [checkAll, setCheckAll] = useState(false)
  const [menu, setMenu] = useState('')

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setCheckedTheme({ ...checkedTheme, [name]: checked })
  }

  const handleCheckAll = () => {
    const newCheckedTheme: checkThemeType = {}
    MAIN_MENU_LIST.forEach((item) => {
      newCheckedTheme[item.theme] = !checkAll
    })
    setCheckedTheme(newCheckedTheme)
    setCheckAll(!checkAll)
  }

  const chooseMenu = (menuArrays: string[][]) => {
    const combinedMenu = [...menuArrays.flat()]
    const randomIndex = Math.floor(Math.random() * combinedMenu.length)
    const choice = combinedMenu[randomIndex]

    return choice
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const checkKeys = Object.keys(checkedTheme).filter((key) => checkedTheme[key])

    const menuList: string[][] = []
    MAIN_MENU_LIST.forEach((item) => {
      checkKeys.forEach((key) => {
        if (key === item.theme) {
          menuList.push(item.menu)
          return
        }
      })
    })

    setMenu(chooseMenu(menuList))
  }

  return (
    <ModalPotal>
      <div className={styles.container}>
        <GoBackButton onClick={closeModal} />
        <h2>어떤 음식을 좋아해?</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          {MAIN_MENU_LIST.map((item) => (
            <label key={item.id}>
              <input type="checkbox" name={item.theme} checked={checkedTheme[item.theme] || false} onChange={handleCheckboxChange} />
              {item.theme}
            </label>
          ))}
          <button type="button" onClick={handleCheckAll}>
            전체선택
          </button>
          <button type="submit">선택했어</button>
        </form>
        <p>선택된 메뉴: {menu}</p>
      </div>
    </ModalPotal>
  )
}

export default ChooseMenuModal
