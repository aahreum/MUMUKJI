import styles from './checkbox.module.scss'

interface CheckBoxProps {
  /** 체크박스 텍스트 입력 */
  label: string
  /** 체크박스 체크 여부 */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CheckBox = ({ label, onChange }: CheckBoxProps) => {
  return (
    <label className={styles.container}>
      <input className={styles.checkbox} type="checkbox" onChange={onChange} />
      <span className={styles.label}>{label}</span>
    </label>
  )
}

export default CheckBox
