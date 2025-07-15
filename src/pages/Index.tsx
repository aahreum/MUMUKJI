import styles from '@/styles/pages/index.module.scss'
import useModal from '@/hooks/useModal'
import TopLogo from '@/components/common/topLogo/TopLogo'
import RouletteGroupButton from '@/components/mainPage/rouletteGroupButton/RouletteGroupButton'
import GroupRouletteList from '@/components/mainPage/groupRouletteList/GroupRouletteList'
import ChooseMenuModal from '@/components/chooseMenuModal/ChooseMenuModal'
import GroupAddButton from '@/components/group/groupAdd/groupAddButton/GroupAddButton'

const Index = (): React.ReactElement => {
  const { isOpen, openModal, closeModal } = useModal('chooseModal')

  return (
    <>
      {isOpen && <ChooseMenuModal close={closeModal} />}
      <TopLogo />
      <main className={styles.container}>
        <img className={styles.image} src="/images/main.png" alt="메인 이미지" />
        <div className={styles.buttonArea}>
          <RouletteGroupButton title="안 정했어?" titleAcc="머먹을지" desc="랜덤으로 추천해줄게" rightText="먹지추천받기" onClick={openModal} />
          <GroupRouletteList />
        </div>
      </main>
      <GroupAddButton />
    </>
  )
}

export default Index
