import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import RouletteGroupButton from './RouletteGroupButton'

const meta = {
  title: 'Components/mainPage/RouletteGroupButton',
  component: RouletteGroupButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '머먹지에서 사용되는 음식 룰렛 버튼 컴포넌트입니다.',
    docs: {
      description: {
        component: `<li>title: 버튼 타이틀을 입력합니다.</li><li>titleAcc: 버튼 타이틀의 강조 부분을 입력합니다.</li><li>desc: 버튼 설명을 입력합니다.</li><li>rightText: 버튼의 행동과 관련된 텍스트를 입력합니다.</li><li>icon: 버튼에 들어갈 아이콘을 리액트 컴포넌트로 추가합니다.</li>
        `,
      },
    },
  },

  argTypes: {
    title: {
      description: '버튼 라벨',
      table: {
        category: 'required',
      },
    },
    desc: {
      description: '버튼 설명',
      table: {
        category: 'required',
      },
    },
    rightText: {
      description: '버튼 우측 텍스트',
      table: {
        category: 'required',
        type: { summary: 'string | null' },
      },
    },
    onClick: {
      description: '버튼 함수',
      table: {
        category: 'required',
        type: { summary: 'function' },
      },
    },
    titleAcc: {
      description: '버튼 강조 라벨 (붉은 글씨)',
      table: {
        category: 'optional',
      },
    },
    primary: {
      description: 'primary style 적용 여부',
      table: {
        category: 'optional',
      },
    },
  },
  decorators: (Story) => <div style={{ width: '448px' }}>{<Story />}</div>,
} satisfies Meta<typeof RouletteGroupButton>

export default meta

type Story = StoryObj<typeof RouletteGroupButton>

export const MainRoulette: Story = {
  args: {
    title: '안 정했어?',
    titleAcc: '머먹을지',
    desc: '랜덤으로 추천해줄게',
    rightText: '먹지추천받기',
    onClick: action('Button clicked'),
    primary: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1787-6964&t=pD666ta77og4q7AJ-1',
    },
    docs: {
      description: {
        story: '머먹지에서 제공하는 메인 음식 룰렛 버튼입니다.',
      },
    },
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1787-6964&t=pD666ta77og4q7AJ-1',
    },
    docs: {
      description: {
        story: '사용자가 작성한 음식 룰렛 버튼입니다.',
      },
    },
  },
}
