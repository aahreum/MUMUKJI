import styles from './groupRouletteList.module.scss'
import THEME_ICON_MAP from '@/constants/themeIconMap'
import { useState } from 'react'
import useGroup from '@/hooks/useGroup'
import useModal from '@/hooks/useModal'
import RouletteGroupButton from '@/components/mainPage/rouletteGroupButton/RouletteGroupButton'
import ResultModal from '@/components/chooseMenuModal/resultModal/ResultModal'

const GroupRouletteList = () => {
  const { groupList } = useGroup()
  const { isOpen, openModal, closeModal } = useModal('resultModal')
  const [selected, setSelected] = useState<{ menu: string; theme: string; icon: string }>({
    menu: '',
    theme: '',
    icon: '',
  })
  const [selectedGroupId, setSelectedGroupId] = useState<number | null>(null)

  const findThemeAndIcon = (theme: string) => {
    const icon = THEME_ICON_MAP[theme]

    if (!icon) {
      throw new Error(`테마 "${theme}"에 해당하는 아이콘이 THEME_ICON_MAP에 없습니다.`)
    }

    return { theme, icon }
  }

  const handleGroupClick = (groupId: number) => {
    const group = groupList.find((g) => g.groupId === groupId)
    if (!group || group.newItem.length === 0) return

    const filteredMenu = group.newItem.filter((item) => item.menu !== selected.menu)
    const targetMenus = filteredMenu.length > 0 ? filteredMenu : group.newItem
    const random = targetMenus[Math.floor(Math.random() * targetMenus.length)]
    const { theme, icon } = findThemeAndIcon(random.theme)

    setSelected({ menu: random.menu, theme, icon })
    openModal()
  }

  const handleRetry = () => {
    if (selectedGroupId !== null) {
      handleGroupClick(selectedGroupId)
    }
  }

  return (
    <>
      {isOpen && (
        <ResultModal
          menu={selected.menu}
          theme={selected.theme}
          icon={selected.icon}
          close={() => {
            closeModal()
          }}
          onRetry={handleRetry}
        />
      )}
      {groupList.length === 0 ? (
        <div className={styles.nullContainer}>
          <p className={styles.title}>저장된 그룹이 없어요</p>
          <p className={styles.desc}>나만의 메뉴로 구성된 그룹을 생성해보세요.</p>
        </div>
      ) : (
        groupList
          .filter((data) => data.favorite)
          .map((data) => (
            <RouletteGroupButton
              key={data.groupId}
              primary={false}
              title={data.groupName}
              desc={data.newItem.map((menuData) => menuData.menu).join(', ')}
              onClick={() => {
                setSelectedGroupId(data.groupId)
                handleGroupClick(data.groupId)
                openModal()
              }}
              rightText={null}
            />
          ))
      )}
    </>
  )
}

export default GroupRouletteList
