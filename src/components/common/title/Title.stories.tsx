import { Meta, StoryObj } from '@storybook/react'
import Title from './Title'

const meta = {
  title: 'Components/common/Title',
  component: Title,
  parameters: {
    componentSubtitle: '타이틀 컴포넌트는 화면(페이지, 모달 등) 메인 텍스트에 사용합니다.',
    docs: {
      description: {
        component: `<li>children: 타이틀을 입력합니다. (&lt;br /&gt;을 사용하여 줄바꿈이 가능합니다)</li><li>textAlignCenter: 텍스트 정렬 값으로 <span class='css-o1d7ko css-in3yi3'>'true' | 'false'</span> 중 하나를 선택할 수 있습니다.</li>
        `,
      },
    },
  },
  tags: ['autodocs'],
  decorators: (story) => <div style={{ width: '550px' }}>{story()}</div>,
} satisfies Meta<typeof Title>

export default meta

type Story = StoryObj<typeof meta>

export const TitleCenter: Story = {
  args: {
    children: '가운데 정렬 타이틀',
    textAlignCenter: true,
  },
}

export const TitleLeft: Story = {
  args: {
    children: '왼쪽 정렬 타이틀',
    textAlignCenter: false,
  },
}
