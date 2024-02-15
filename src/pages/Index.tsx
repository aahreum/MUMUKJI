import image from '/images/ani.png'
import styles from '@/styles/pages/index.module.scss'
import TopLogo from '@/components/common/TopLogo'
import MainRouletteButton from '@/components/rouletteButton/MainRouletteButton'
import GroupRouletteList from '@/components/rouletteButton/GroupRouletteList'

const Index = (): React.ReactElement => {
  return (
    <>
      <TopLogo />
      <main className={styles.container}>
        <img className={styles.image} src={image} alt="메인이미지" />
        <div className={styles.buttonArea}>
          <MainRouletteButton />
          <GroupRouletteList />
        </div>
      </main>
    </>
  )
}

export default Index
