import styles from '@/styles/pages/inProgress.module.scss'
import inProgressImg from '/images/inProgress.png'
import Title from '@/components/common/title/Title'
import TopLogo from '@/components/common/topLogo/TopLogo'
import LinkButton from '@/components/common/linkButton/LinkButton'

const InProgress = (): React.ReactElement => {
  return (
    <>
      <TopLogo />
      <div className={styles.container}>
        <img src={inProgressImg} alt="inProgress-image" />
        <Title>아직 개발중이에요</Title>
        <p>조금만 기다려주세요!</p>
        <LinkButton link="/" label="홈으로 돌아가기" />
      </div>
    </>
  )
}

export default InProgress
