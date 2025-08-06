import { ChangeEvent, useState } from 'react'
import styles from './chooseMenuModal.module.scss'
import { storedGroupData, newItemDataTypes } from '@/types/groupDataTypes'
import MAIN_MENU_LIST from '@/constants/mainMenuList'
import Title from '@/components/common/title/Title'
import FoodCategoryButton from './foodCategoryButton/FoodCategoryButton'
import CheckBox from '@/components/common/checkbox/Checkbox'
import Button from '@/components/common/button/Button'
import useModal from '@/hooks/useModal'
import FullModalCotainer from '@/components/common/modal/FullModalCotainer'
import ResultModal from './resultModal/ResultModal'

interface chooseMenuModalType {
  close: () => void
}

interface checkThemeType {
  [key: string]: boolean
}

interface MenuItemType {
  menu: string
  theme: string
  icon: string
}

const ChooseMenuModal = ({ close }: chooseMenuModalType) => {
  const { isOpen, openModal, closeModal } = useModal('resultModal')
  const [checkedTheme, setCheckedTheme] = useState<checkThemeType>({})
  const [checkAll, setCheckAll] = useState(false)
  const [chosenValue, setChosenValue] = useState<{
    theme: string
    menu: string
    icon: string
  } | null>(null)

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    const newCheckedTheme = { ...checkedTheme, [name]: checked }
    setCheckedTheme(newCheckedTheme)

    if (checked) {
      const allSelected = MAIN_MENU_LIST.every((item) => newCheckedTheme[item.theme])
      if (allSelected) setCheckAll(true)
    } else {
      setCheckAll(false)
    }
  }

  const handleCheckAll = () => {
    const newCheckedValue = !checkAll
    const newCheckedTheme = MAIN_MENU_LIST.reduce((acc, item) => {
      acc[item.theme] = newCheckedValue
      return acc
    }, {} as checkThemeType)
    setCheckedTheme(newCheckedTheme)
    setCheckAll(newCheckedValue)
  }

  const getUserMenuList = (selectedThemes: string[]): MenuItemType[] => {
    try {
      const savedData = localStorage.getItem('menuList')
      if (!savedData) return []

      const userData: Record<string, storedGroupData> = JSON.parse(savedData)
      const userMenus: MenuItemType[] = []

      Object.values(userData).forEach((group: storedGroupData) => {
        if (group.menu && Array.isArray(group.menu)) {
          group.menu.forEach((item: newItemDataTypes) => {
            if (selectedThemes.includes(item.theme)) {
              userMenus.push({
                menu: item.menu,
                theme: item.theme,
                icon: ``,
              })
            }
          })
        }
      })

      return userMenus
    } catch (error) {
      console.error('로컬스토리지 데이터 파싱 오류:', error)
      return []
    }
  }

  const getFilteredMenuList = (): MenuItemType[] => {
    const selectedThemes = Object.keys(checkedTheme).filter((key) => checkedTheme[key])

    if (selectedThemes.length === 0) {
      return []
    }
    const mainMenuItems: MenuItemType[] = MAIN_MENU_LIST.filter((item) => selectedThemes.includes(item.theme)).flatMap((item) =>
      item.menu.map((menuName) => ({
        menu: menuName,
        theme: item.theme,
        icon: item.icon,
      })),
    )

    const userMenuItems = getUserMenuList(selectedThemes)
    return [...mainMenuItems, ...userMenuItems]
  }

  const chooseMenu = (allMenuItems: MenuItemType[]): MenuItemType => {
    if (allMenuItems.length === 0) {
      return { menu: '', theme: '', icon: '' }
    }

    const previousMenu = chosenValue?.menu || ''
    const filteredMenu = previousMenu ? allMenuItems.filter((item) => item.menu !== previousMenu) : allMenuItems

    const finalMenuPool = filteredMenu.length > 0 ? filteredMenu : allMenuItems
    const randomIndex = Math.floor(Math.random() * finalMenuPool.length)

    return finalMenuPool[randomIndex]
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const filteredMenuList = getFilteredMenuList()
    const result = chooseMenu(filteredMenuList)

    if (result.menu && result.theme && result.icon) {
      setChosenValue(null)
      setTimeout(() => {
        setChosenValue(result)
        openModal()
      }, 50)
    } else {
      console.error('유효하지 않은 결과:', result)
    }
  }

  const handleRetry = () => {
    const filteredMenuList = getFilteredMenuList()
    const result = chooseMenu(filteredMenuList)

    if (result.menu && result.theme && result.icon) {
      setChosenValue(result)
    } else {
      console.error('재시도 - 유효하지 않은 결과:', result)
    }
  }

  const isDisabled = Object.keys(checkedTheme).length === 0 || Object.values(checkedTheme).every((value) => value === false)

  return (
    <>
      {isOpen && chosenValue && chosenValue.menu && chosenValue.theme && chosenValue.icon && (
        <ResultModal
          icon={chosenValue.icon}
          menu={chosenValue.menu}
          theme={chosenValue.theme}
          close={() => {
            closeModal()
            setCheckedTheme({})
            setChosenValue(null)
          }}
          onRetry={handleRetry}
        />
      )}
      <FullModalCotainer onClick={close}>
        <div className={styles.container}>
          <Title textAlignCenter={false}>
            어떤 음식을 <br />
            좋아해?
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
              <CheckBox label="전체선택" checked={checkAll} onChange={handleCheckAll} />
              <Button disabled={isDisabled} full={true} type="submit" label={isDisabled ? '음식을 선택해줘' : '선택했어'} />
            </div>
          </form>
        </div>
      </FullModalCotainer>
    </>
  )
}

export default ChooseMenuModal
