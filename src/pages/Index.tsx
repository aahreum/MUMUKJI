import styles from '@/styles/pages/index.module.scss'
import TopLogo from '@/components/common/topLogo/TopLogo'
import MainRouletteButton from '@/components/mainPage/mainRouletteButton/MainRouletteButton'
import GroupRouletteList from '@/components/mainPage/groupRouletteButton/GroupRouletteList'

const Index = (): React.ReactElement => {
  return (
    <>
      <TopLogo />
      <main className={styles.container}>
        <img className={styles.image} src="/images/main.png" alt="메인 이미지" />
        <div className={styles.buttonArea}>
          <MainRouletteButton />
          <GroupRouletteList />
        </div>
      </main>
    </>
  )
}

export default Index
