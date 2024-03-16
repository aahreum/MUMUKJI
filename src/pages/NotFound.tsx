import styles from '@/styles/pages/notFound.module.scss'
import notFoundImg from '/images/notFound.png'
import TopLogo from '@/components/common/topLogo/TopLogo'
import LinkButton from '@/components/common/button/LinkButton'

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
        <LinkButton link="/" />
      </div>
    </>
  )
}

export default NotFound
