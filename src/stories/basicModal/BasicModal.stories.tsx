import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import BasicModal from './BasicModalStory'
import { Story } from '@storybook/blocks'

const meta = {
  title: 'Components/common/BasicModal',
  component: BasicModal,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '공통으로 사용하는 모달 컴포넌트입니다.',
    docs: {
      description: {
        component:
          '<li>modalType을 설정해서 모달을 사용합니다. <code>alert</code> <code>confirmN</code>  <code>confirmP</code></li><li><code>confirm</code> 타입은 secondButton이 필수로 있어야 합니다.</li>',
      },
    },
  },

  argTypes: {
    modalType: {
      description: '모달 종류 선택',
      table: {
        type: { summary: 'union' },
      },
      control: {
        type: 'radio',
      },
      options: ['alert', 'confirmP', 'confirmN'],
    },
    title: {
      description: '모달 제목 입력',
    },
    desc: {
      description: '모달 설명 입력',
    },
  },
} satisfies Meta<typeof BasicModal>

export default meta

type Story = StoryObj<typeof BasicModal>

export const ConfirmPositive: Story = {
  args: {
    modalType: 'confirmP',
    title: 'title',
    desc: 'description',
    firstBtnLabel: 'button1',
    firstBtnOnClick: action('Button clicked'),
    secondBtnLabel: 'button2',
    secondBtnOnClick: action('Button clicked'),
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KVyRukGQ4m9qjSFMl6USRE/%ED%81%AC%ED%8C%8C-%EB%82%98%EC%9D%B8%ED%95%98%EC%9D%B4%EC%96%B4-%EC%B1%84%EC%9A%A9%EC%9D%B4%EB%AF%B8%EC%A7%80?node-id=89-15&t=v24VQbtcvYFoYrV8-1',
    },
    componentSubtitle: '공통으로 사용하는 모달 컴포넌트입니다.',
    docs: {
      description: {
        story: '사용자에게 긍정적인 컨펌이 필요할 때 사용하는 모달입니다.',
      },
    },
  },
}

export const ConfirmNegative: Story = {
  args: {
    modalType: 'confirmN',
    title: 'title',
    desc: 'description',
    firstBtnLabel: 'button1',
    firstBtnOnClick: action('Button clicked'),
    secondBtnLabel: 'button2',
    secondBtnOnClick: action('Button clicked'),
  },
}

export const Alert: Story = {
  args: {
    modalType: 'alert',
    title: 'Title',
    desc: 'description',
    firstBtnLabel: 'button1',
    firstBtnOnClick: action('Button clicked'),
  },
}
