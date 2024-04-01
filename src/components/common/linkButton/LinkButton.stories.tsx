import { Meta, StoryObj } from '@storybook/react'
import LinkButton from './LinkButton'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Components/common/LinkButton',
  component: LinkButton,
  decorators: (story) => <BrowserRouter>{story()}</BrowserRouter>,
  tags: ['autodocs'],

  args: {},
} satisfies Meta<typeof LinkButton>

export default meta

type Story = StoryObj<typeof meta>

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
