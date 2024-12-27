import { Meta, StoryObj } from '@storybook/react'
import LinkButton from './LinkButton'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Components/common/LinkButton',
  component: LinkButton,
  parameters: {
    componentSubtitle: '링크 버튼 컴포넌트는 페이지 이동 시 사용하는 버튼입니다.',
    docs: {
      description: {
        component: `<li>link: 이동할 경로를 입력합니다.</li><li>label: 버튼 텍스트를 입력합니다.</li><li>primary: 버튼 스타일 값으로 <span className='css-o1d7ko css-in3yi3'>'true' | 'false'</span> 중 하나를 선택할 수 있습니다.</li>
        `,
      },
    },
  },
  decorators: (story) => (
    <BrowserRouter>
      <div style={{ width: '600px' }}>{story()}</div>
    </BrowserRouter>
  ),
  tags: ['autodocs'],
} satisfies Meta<typeof LinkButton>

export default meta

type Story = StoryObj<typeof LinkButton>

export const Primary: Story = {
  args: {
    link: '/mumukji',
    label: '페이지 이동 버튼',
    primary: true,
  },
}

export const Secondary: Story = {
  args: {
    link: '/mumukji',
    label: '페이지 이동 버튼',
    primary: false,
  },
}
