import styles from './textfield.module.scss'
import CloseCircleIcon from '@/assets/icons/groupList/close_circle.svg?react'

interface TextfieldProps {
  styleType: 'outline' | 'underline'
  placeholder: string
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
  handleInputDelete: () => void
}

const Textfield = ({ styleType, placeholder, value, onChange, handleInputDelete }: TextfieldProps) => {
  return (
    <div className={`${styles.container} ${styleType === 'outline' ? styles.outline : styles.underline}`}>
      <input className={styles.input} type="text" placeholder={placeholder} maxLength={20} value={value} onChange={onChange} />
      {value.length > 0 && (
        <button className={styles.inputDelBtn} type="button" onClick={handleInputDelete}>
          <CloseCircleIcon />
        </button>
      )}
      <p className={styles.textCount}>{value.length}/20</p>
    </div>
  )
}

export default Textfield
