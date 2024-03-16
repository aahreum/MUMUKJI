import styles from './mainRouletteButton.module.scss'
import ArrowRight from '@/assets/icons/arrow_right.svg?react'
import ChooseMenuModal from '@/components/chooseMenuModal/ChooseMenuModal'
import useModal from '@/hooks/useModal'

const MainRouletteButton = () => {
  const { modalOpen, openModal, closeModal } = useModal()

  return (
    <>
      {modalOpen && <ChooseMenuModal closeModal={closeModal} />}
      <button className={styles.container} type="button" onClick={openModal}>
        <span>
          <span className={styles.accent}>머먹을지</span> 안 정했어?
        </span>
        <div className={styles.rightArea}>
          <span>먹지추천받기</span>
          <ArrowRight />
        </div>
      </button>
    </>
  )
}

export default MainRouletteButton
