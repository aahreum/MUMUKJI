import { Meta, StoryObj } from '@storybook/react'
import Title from './Title'

const meta = {
  title: 'Components/common/Title',
  component: Title,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '머먹지 페이지나 모달에서 사용하는 타이틀 컴포넌트 입니다.',
    docs: {
      description: {
        component:
          '<li><code>children</code>에 타이틀을 입력합니다. (&lt;br /&gt;태그를 사용해서 줄바꿈을 할 수 있습니다.)</li><li><code>textAlignCenter</code>로 텍스트 정렬을 설정합니다. <code>true</code><code>false</code> 중 하나를 선택할 수 있습니다.</li>',
      },
    },
  },

  argTypes: {
    children: {
      description: '타이틀 입력',
      table: {
        category: 'required',
        type: { summary: 'ReactNode' },
      },
    },
    textAlignCenter: {
      table: {
        category: 'optional',
      },
    },
  },
  decorators: (Story) => <div style={{ width: '620px' }}>{<Story />}</div>,
} satisfies Meta<typeof Title>

export default meta

type Story = StoryObj<typeof Title>

export const TitleCenter: Story = {
  args: {
    children: '어떤 음식을 좋아해?',
    textAlignCenter: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1754-6936&t=pD666ta77og4q7AJ-1',
    },
  },
}

export const TitleLeft: Story = {
  args: {
    children: '어떤 음식을 좋아해?',
    textAlignCenter: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1754-6936&t=pD666ta77og4q7AJ-1',
    },
  },
}
