import Button from '@/components/common/button/Button'
import styles from './groupAddForm.module.scss'
import ArrowIcon from '@/assets/icons/groupList/arrow_down.svg?react'
// import CloseCircleIcon from '@/assets/icons/groupList/close_circle.svg?react'

const GroupAddForm = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selectedBoxArea}>
        <button type="button" className={styles.selectedBox}>
          카테고리 선택 <ArrowIcon />
        </button>
      </div>
      <div className={styles.inputArea}>
        <input className={styles.input} type="text" placeholder="가게 또는 메뉴를 입력해주세요." />
        {/* <CloseCircleIcon /> */}
        <p className={styles.textCount}>0/20</p>
      </div>
      <div className={styles.buttonArea}>
        <Button label="취소" size="s" color="basic" />
        <Button label="완료" size="s" color="secondary" disabled />
      </div>
    </div>
  )
}

export default GroupAddForm
