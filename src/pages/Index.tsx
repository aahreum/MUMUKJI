import image from '/images/ani.png'
import styles from '@/styles/pages/index.module.scss'
import TopLogo from '@/components/common/TopLogo'

const Index = (): React.ReactElement => {
  return (
    <>
      <TopLogo />
      <main className={styles.container}>
        <img className={styles.image} src={image} alt="메인이미지" />
      </main>
    </>
  )
}

export default Index
