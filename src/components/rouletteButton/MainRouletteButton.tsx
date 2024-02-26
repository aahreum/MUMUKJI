import styles from './mainRouletteButton.module.scss'
import ArrowRight from '@/assets/icons/arrow_right.svg?react'

const MainRouletteButton = () => {
  const MENU1 = ['짜장면', '짬뽕', '탕수육', '마라탕', '피자', '치킨']
  const MENU2 = ['라면', '떡볶이', '샤브샤브']

  const chooseMenu = (...menuArrays: string[][]) => {
    const combinedMenu = [...menuArrays.flat()]
    const randomIndex = Math.floor(Math.random() * combinedMenu.length)
    const choice = combinedMenu[randomIndex]

    console.log(combinedMenu)
    console.log(choice)
  }

  return (
    <button className={styles.container} type="button" onClick={() => chooseMenu(MENU1, MENU2)}>
      <span>
        <span className={styles.accent}>머먹을지</span> 안 정했어?
      </span>
      <div className={styles.rightArea}>
        <span>먹지추천받기</span>
        <ArrowRight />
      </div>
    </button>
  )
}

export default MainRouletteButton
