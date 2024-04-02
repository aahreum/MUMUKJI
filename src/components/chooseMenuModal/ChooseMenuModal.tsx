import { ChangeEvent, useState } from 'react'
import styles from './chooseMenuModal.module.scss'
import ModalPotal from '@/components/common/modal/ModalPotal'
import MAIN_MENU_LIST from '@/constants/mainMenuList'
import GoBackButton from '../common/goBackButton/GoBackButton'
import Title from '@/components/common/title/Title'
import FoodCategoryButton from './foodCategoryButton/FoodCategoryButton'

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
        <Title textAlignCenter={false}>
          어떤 음식을 <br /> 좋아해?
        </Title>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.inputCheckboxArea}>
            {MAIN_MENU_LIST.map((item) => (
              <FoodCategoryButton
                key={item.id}
                theme={item.theme}
                image={item.image}
                menu={item.menu}
                checked={checkedTheme[item.theme] || false}
                onChange={handleCheckboxChange}
              />
            ))}
          </div>
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
