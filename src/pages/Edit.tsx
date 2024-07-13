import styles from '@/styles/pages/edit.module.scss'
import Button from '@/components/common/button/Button'
import Header from '@/components/common/header/Header'
import emptyImg from '/images/empty.png'
import BasicModal from '@/components/common/modal/BasicModal'
import useModal from '@/hooks/useModal'

const Edit = () => {
  const { isOpen, openModal, closeModal } = useModal()
  return (
    <>
      {isOpen && (
        <BasicModal
          title={
            <>
              나가시겠어요? <br />
              작성 중인 내용은 삭제돼요.
            </>
          }
          desc={
            <>
              저장하지 않고 페이지를 벗어나면, <br /> 지금까지 작성한 내용이 사라집니다.
            </>
          }
          firstBtnColor="basic"
          firstBtnLabel="나가기"
          firstBtnOnClick={closeModal}
          secondBtnColor="secondary"
          secondBtnLabel="머무르기"
          secondBtnOnClick={closeModal}
        />
      )}
      <Header title="그룹 편집" />
      <div className={styles.emptyContainer}>
        <div className={styles.emptyContentsArea}>
          <img src={emptyImg} alt="emptyImg" />
          <p className={styles.title}>저장된 그룹이 없어요</p>
          <p className={styles.desc}>나만의 메뉴로 구성된 그룹을 생성해보세요.</p>
        </div>
        <Button
          label="그룹 추가하기"
          type="button"
          onClick={() => {
            openModal()
          }}
        />
      </div>
    </>
  )
}

export default Edit
