import styles from './checkbox.module.scss'

interface CheckBoxProps {
  /** 체크박스 텍스트 입력 */
  label: string
  /** 체크박스 onChange */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** 체크박스 체크 여부 */
  checked: boolean
}

const CheckBox = ({ label, onChange, checked }: CheckBoxProps) => {
  return (
    <label className={styles.container}>
      <input className={styles.checkbox} type="checkbox" onChange={onChange} checked={checked} />
      <span className={styles.label}>{label}</span>
    </label>
  )
}

export default CheckBox
