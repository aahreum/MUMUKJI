import RouletteGroupButton from '../common/rouletteGroupButton/RouletteGroupButton'

const GroupRouletteList = () => {
  return (
    <>
      <RouletteGroupButton
        primary={false}
        title="서울 사무실 점심"
        desc="홍콩반점, 김밥천국, 왕족발보쌈, 신전떡볶이, 홍콩반점, 김밥천국, 왕족발보쌈, 신전떡볶이"
        onClick={() => console.log('하하')}
        rightText={null}
      />
    </>
  )
}

export default GroupRouletteList
