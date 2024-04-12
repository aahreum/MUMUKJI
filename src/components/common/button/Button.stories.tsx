import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

const meta = {
  title: 'Components/common/Button',
  component: Button,
  parameters: {
    componentSubtitle: '머먹지에서 공통으로 사용하는 버튼 컴포넌트입니다.',
    docs: {
      description: {
        component: `<li>label: 버튼 텍스트를 입력합니다.</li><li>primary: 버튼 스타일 값으로 <span class='css-o1d7ko css-in3yi3'>'true' | 'false'</span> 중 하나를 선택할 수 있습니다.</li><li>light: 버튼 텍스트 스타일 값으로 <span class='css-o1d7ko css-in3yi3'>'true' | 'false'</span> 중 하나를 선택할 수 있습니다.</li><li>type: 버튼 타입 기본 값은 <span class='css-o1d7ko css-in3yi3'>button</span>입니다.</li>
        
        `,
      },
    },
  },
  decorators: (story) => <div style={{ width: '600px' }}>{story()}</div>,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    label: '버튼',
    primary: true,
    light: false,
    type: 'button',
    disabled: false,
    onClick: action('Button clicked'),
  },
}

export const Secondary: Story = {
  args: {
    label: '버튼',
    primary: false,
    light: false,
    type: 'button',
    disabled: false,
    onClick: action('Button clicked'),
  },
}

export const SecondaryLight: Story = {
  args: {
    label: '버튼',
    primary: false,
    light: true,
    type: 'button',
    disabled: false,
    onClick: action('Button clicked'),
  },
}
