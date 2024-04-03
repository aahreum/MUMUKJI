import styles from './checkbox.module.scss'

interface CheckBoxProps {
  /** 체크박스 텍스트 입력 */
  lable: string
  /** 체크박스 체크 여부 */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBox = ({ lable, onChange }: CheckBoxProps) => {
  return (
    <label className={styles.container}>
      <input className={styles.checkbox} type="checkbox" onChange={onChange} />
      <span className={styles.label}>{lable}</span>
    </label>
  )
}

export default CheckBox
