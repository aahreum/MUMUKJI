import { ChangeEvent, useState } from 'react'
import styles from './chooseMenuModal.module.scss'
import MAIN_MENU_LIST from '@/constants/mainMenuList'
import Title from '@/components/common/title/Title'
import FoodCategoryButton from './foodCategoryButton/FoodCategoryButton'
import CheckBox from '../common/checkbox/Checkbox'
import Button from '../common/button/Button'
import useModal from '@/hooks/useModal'
import FullModalCotainer from '../common/modal/FullModalCotainer'
import ResultModal from './resultModal/ResultModal'

interface chooseMenuModalType {
  close: () => void
}

interface checkThemeType {
  [key: string]: boolean
}

const ChooseMenuModal = ({ close }: chooseMenuModalType) => {
  const { isOpen, openModal, closeModal } = useModal()
  const [checkedTheme, setCheckedTheme] = useState<checkThemeType>({})
  const [checkAll, setCheckAll] = useState(false)
  const [chosenValue, setChosenValue] = useState({ theme: '', menu: '' })

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
    const filteredMenu = chosenValue.menu !== '' ? combinedMenu.filter((menu) => menu !== chosenValue.menu) : combinedMenu

    if (filteredMenu.length === 0) {
      const chosenTheme = MAIN_MENU_LIST.find((item) => item.menu.includes(chosenValue.menu))!.theme
      return { menu: chosenValue.menu, theme: chosenTheme }
    }

    const randomIndex = Math.floor(Math.random() * filteredMenu.length)
    const chosenMenu = filteredMenu[randomIndex]
    const chosenTheme = MAIN_MENU_LIST.find((item) => item.menu.includes(chosenMenu))!.theme

    return { menu: chosenMenu, theme: chosenTheme }
  }

  const getMenuList = () => {
    const checkKeys = Object.keys(checkedTheme).filter((key) => checkedTheme[key])
    return MAIN_MENU_LIST.filter((item) => checkKeys.includes(item.theme)).map((item) => item.menu)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const menuList: string[][] = getMenuList()
    setChosenValue(chooseMenu(menuList))
    openModal()
  }

  const handleRetry = () => {
    const menuList: string[][] = getMenuList()
    setChosenValue(chooseMenu(menuList))
  }

  const isDisabled = Object.keys(checkedTheme).length === 0 || Object.values(checkedTheme).every((value) => value === false)

  return (
    <>
      {isOpen && (
        <ResultModal
          menu={chosenValue.menu}
          theme={chosenValue.theme}
          close={() => {
            closeModal()
            setCheckedTheme({})
          }}
          onRetry={handleRetry}
        />
      )}
      <FullModalCotainer onClick={close}>
        <div className={styles.container}>
          <Title textAlignCenter={false}>
            어떤 음식을 <br /> 좋아해?
          </Title>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.inputCheckboxArea}>
              {MAIN_MENU_LIST.map((item) => (
                <FoodCategoryButton
                  key={item.id}
                  theme={item.theme}
                  icon={item.icon}
                  menu={item.menu}
                  checked={checkedTheme[item.theme] || false}
                  onChange={handleCheckboxChange}
                />
              ))}
            </div>
            <div className={styles.buttonArea}>
              <CheckBox label="전체선택" onChange={handleCheckAll} />
              <Button disabled={isDisabled} type="submit" label={isDisabled ? '음식을 선택해줘' : '선택했어'} />
            </div>
          </form>
        </div>
      </FullModalCotainer>
    </>
  )
}

export default ChooseMenuModal
