import styles from '@/styles/pages/edit.module.scss'
import Button from '@/components/common/button/Button'
import Header from '@/components/common/header/Header'
import emptyImg from '/images/empty.png'

const Edit = () => {
  return (
    <>
      <Header title="그룹 편집" />
      <div className={styles.emptyContainer}>
        <div className={styles.emptyContentsArea}>
          <img src={emptyImg} alt="emptyImg" />
          <p className={styles.title}>저장된 그룹이 없어요</p>
          <p className={styles.desc}>나만의 메뉴로 구성된 그룹을 생성해보세요.</p>
        </div>
        <Button label="그룹 추가하기" type="button" onClick={() => {}} />
      </div>
    </>
  )
}

export default Edit
