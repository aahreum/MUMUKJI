import koreanIcon from '@/assets/icons/foodCategory/korean.svg'
import japaneseIcon from '@/assets/icons/foodCategory/japanese.svg'
import chineseIcon from '@/assets/icons/foodCategory/chinese.svg'
import westernIcon from '@/assets/icons/foodCategory/western.svg'
import asianIcon from '@/assets/icons/foodCategory/asian.svg'
import fastfoodIcon from '@/assets/icons/foodCategory/fastfood.svg'
import chickenIcon from '@/assets/icons/foodCategory/chicken.svg'
import bunsikIcon from '@/assets/icons/foodCategory/bunsik.svg'
import dietIcon from '@/assets/icons/foodCategory/diet.svg'

const THEME_ICON_MAP: Record<string, string> = {
  한식: koreanIcon,
  일식: japaneseIcon,
  중식: chineseIcon,
  양식: westernIcon,
  아시안: asianIcon,
  패스트푸드: fastfoodIcon,
  치킨: chickenIcon,
  분식: bunsikIcon,
  식단조절: dietIcon,
}

export default THEME_ICON_MAP
