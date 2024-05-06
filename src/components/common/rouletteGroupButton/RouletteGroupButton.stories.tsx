import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RouletteGroupButton from './RouletteGroupButton'
import CloseCircle from '@/assets/icons/close_circle.svg?react'

const meta = {
  title: 'Components/common/RouletteGroupButton',
  component: RouletteGroupButton,
  parameters: {
    componentSubtitle: '메인 룰렛 버튼, 그룹 룰렛 편집 버튼에 사용되는 컴포넌트입니다.',
    docs: {
      description: {
        component: `<li>title: 버튼 타이틀을 입력합니다.</li><li>titleAcc: 버튼 타이틀의 강조 부분을 입력합니다.</li><li>desc: 버튼 설명을 입력합니다.</li><li>rightText: 버튼의 행동과 관련된 텍스트를 입력합니다.</li><li>icon: 버튼에 들어갈 아이콘을 리액트 컴포넌트로 추가합니다.</li>
        `,
      },
    },
  },
  decorators: (story) => <div style={{ width: '448px' }}>{story()}</div>,
  tags: ['autodocs'],
} satisfies Meta<typeof RouletteGroupButton>

export default meta

type Story = StoryObj<typeof meta>

export const MainRoulette: Story = {
  args: {
    title: '안 정했어?',
    titleAcc: '머먹을지',
    desc: '랜덤으로 추천해줄게',
    rightText: '먹지추천받기',
    onClick: action('Button clicked'),
    primary: true,
  },
}

export const CustomRoulette: Story = {
  args: {
    title: '그룹명 최대 15글자',
    desc: '그룹 목록 미리보기, 백종원 홍콩반점 선릉점, 백종원 홍콩반점 선릉점, 백종원 홍콩반점 선릉점, 백종원 홍콩반점 선릉점',
    onClick: action('Button clicked'),
    primary: false,
    rightText: null,
  },
}

export const EditRoulette: Story = {
  args: {
    title: '그룹명 최대 15글자',
    desc: '그룹 목록 미리보기, 백종원 홍콩반점 선릉점, 백종원 홍콩반점 선릉점,',
    rightText: '목록 편집',
    icon: <CloseCircle />,
    onClick: action('Button clicked'),
    primary: false,
  },
}
