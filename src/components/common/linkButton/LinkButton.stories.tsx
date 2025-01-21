import { Meta, StoryObj } from '@storybook/react'
import LinkButton from './LinkButton'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Components/common/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '머먹지에서 페이지 이동이 있을때 사용하는 링크 버튼 컴포넌트입니다.',
    docs: {
      description: {
        component: '<li><code>link</code><code>label</code>은 필수로 입력해야 합니다.</li>',
      },
    },
  },

  argTypes: {
    link: {
      description: '이동 경로',
      table: {
        category: 'required',
      },
    },
    label: {
      description: '버튼 라벨',
      table: {
        category: 'required',
      },
    },
    primary: {
      description: 'primary style 적용 여부',
      table: {
        category: 'optional',
      },
    },
  },
  decorators: (Story) => (
    <BrowserRouter>
      <div style={{ width: '600px' }}>{<Story />}</div>
    </BrowserRouter>
  ),
} satisfies Meta<typeof LinkButton>

export default meta

type Story = StoryObj<typeof LinkButton>

export const Primary: Story = {
  args: {
    link: '/mumukji',
    label: '홈으로 돌아가기',
    primary: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1780-6938&t=pD666ta77og4q7AJ-1',
    },
  },
}

export const Secondary: Story = {
  args: {
    link: '/mumukji',
    label: '홈으로 돌아가기',
    primary: false,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1780-6938&t=pD666ta77og4q7AJ-1',
    },
  },
}
