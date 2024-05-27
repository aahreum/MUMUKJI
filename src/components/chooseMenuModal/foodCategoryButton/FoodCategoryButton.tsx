import styles from './foodCategoryButton.module.scss'

interface FoodCategoryButtonProps {
  theme: string
  checked: boolean
  icon: string
  menu: string[]
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FoodCategoryButton = ({ theme, checked, onChange, icon, menu }: FoodCategoryButtonProps): React.ReactElement => {
  return (
    <label className={`${styles.container} ${checked ? styles.checked : ''}`}>
      <img width={48} height={48} src={icon} alt={theme} />
      <input className={styles.checkbox} type="checkbox" name={theme} checked={checked} onChange={onChange} />
      <p>{theme}</p>
      <div>
        <span>
          {menu[0]}, {menu[1]}
        </span>
      </div>
    </label>
  )
}

export default FoodCategoryButton
