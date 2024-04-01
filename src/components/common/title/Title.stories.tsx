import { Meta, StoryObj } from '@storybook/react'
import Title from './Title'

const meta = {
  title: 'Components/common/Title',
  component: Title,
  decorators: (story) => story(),
  tags: ['autodocs'],

  args: {},
} satisfies Meta<typeof Title>

export default meta

type Story = StoryObj<typeof meta>

export const TitleLeft: Story = {
  args: {
    children: (
      <>
        왼쪽 정렬
        <br />
        타이틀
      </>
    ),
    textAlignCenter: false,
  },
}

export const TitleCenter: Story = {
  args: {
    children: <>가운데 정렬 타이틀</>,
    textAlignCenter: true,
  },
}
