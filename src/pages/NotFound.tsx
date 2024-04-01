import styles from '@/styles/pages/notFound.module.scss'
import notFoundImg from '/images/notFound.png'
import TopLogo from '@/components/common/topLogo/TopLogo'
import LinkButton from '@/components/common/linkButton/LinkButton'

const NotFound = (): React.ReactElement => {
  return (
    <>
      <TopLogo />
      <div className={styles.container}>
        <img src={notFoundImg} alt="notfound-image" />
        <p className={styles.title}>페이지를 찾을 수 없어요</p>
        <p>
          요청하신 페이지의 주소가 변경, <br /> 삭제되어 찾을 수 없어요.
        </p>
        <LinkButton label="홈으로 돌아가기" link="/" />
      </div>
    </>
  )
}

export default NotFound
