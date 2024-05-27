import koreanIcon from '@/assets/icons/foodCategory/korean.svg'
import japaneseIcon from '@/assets/icons/foodCategory/japanese.svg'
import chineseIcon from '@/assets/icons/foodCategory/chinese.svg'
import westernIcon from '@/assets/icons/foodCategory/western.svg'
import asianIcon from '@/assets/icons/foodCategory/asian.svg'
import fastfoodIcon from '@/assets/icons/foodCategory/fastfood.svg'
import chickenIcon from '@/assets/icons/foodCategory/chicken.svg'
import bunsikIcon from '@/assets/icons/foodCategory/bunsik.svg'
import dietIcon from '@/assets/icons/foodCategory/diet.svg'

interface MAIN_MENU_LIST_T {
  id: number
  theme: string
  icon: string
  menu: string[]
}

const MAIN_MENU_LIST: MAIN_MENU_LIST_T[] = [
  {
    id: 0,
    theme: '한식',
    icon: koreanIcon,
    menu: ['갈비탕', '설렁탕', '된장찌개', '비빔밥', '김치찌개'],
  },
  {
    id: 1,
    theme: '일식',
    icon: japaneseIcon,
    menu: ['초밥', '라멘', '우동', '돈부리', '가츠동'],
  },
  {
    id: 2,
    theme: '중식',
    icon: chineseIcon,
    menu: ['짜장면', '짬뽕', '탕수육', '볶음밥', '양장피'],
  },
  {
    id: 3,
    theme: '양식',
    icon: westernIcon,
    menu: ['스테이크', '파스타', '피자', '버거', '샐러드'],
  },
  {
    id: 4,
    theme: '아시안',
    icon: asianIcon,
    menu: ['쌀국수', '팟타이', '반미', '떡갈비', '피서룽'],
  },
  {
    id: 5,
    theme: '패스트푸드',
    icon: fastfoodIcon,
    menu: ['햄버거', '프렌치 프라이', '핫도그', '피자', '치킨 너겟'],
  },
  {
    id: 6,
    theme: '치킨',
    icon: chickenIcon,
    menu: ['황금올리브', '레드콤보', '허니콤보', '후라이드 치킨', '양념 치킨'],
  },
  {
    id: 7,
    theme: '분식',
    icon: bunsikIcon,
    menu: ['떡볶이', '튀김', '라면', '순대', '김밥'],
  },
  {
    id: 8,
    theme: '식단조절',
    icon: dietIcon,
    menu: ['닭가슴살', '단호박 스프', '토마토 주스', '야채스틱', '그릴된 연어'],
  },
]
export default MAIN_MENU_LIST
