import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import BasicModal from './BasicModalStory'
import { Story } from '@storybook/blocks'

const meta = {
  title: 'Components/common/BasicModal',
  component: BasicModal,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '머먹지에서 공통으로 사용하는 모달 컴포넌트입니다.',
    docs: {
      description: {
        component:
          '<li>modalType을 설정해서 모달을 사용합니다. <code>alert</code> <code>confirmN</code>  <code>confirmP</code></li><li><code>confirm</code> 타입은 <code>secondBtn</code>이 필수로 있어야 합니다.</li>',
      },
    },
  },

  argTypes: {
    modalType: {
      description: '모달 종류',
      control: 'radio',
      options: ['alert', 'confirmP', 'confirmN'],
      table: {
        category: 'required',
        type: { summary: 'union' },
      },
    },
    title: {
      description: '모달 제목',
      table: {
        category: 'required',
        type: { summary: 'ReactNode' },
      },
    },
    desc: {
      description: '모달 설명',
      table: {
        category: 'required',
        type: { summary: 'ReactNode' },
      },
    },
    firstBtnLabel: {
      control: 'text',
      description: '첫번째 버튼 라벨',
      table: {
        category: 'required',
      },
    },
    firstBtnOnClick: {
      description: '첫번째 버튼 함수',
      table: {
        category: 'required',
      },
    },
    secondBtnLabel: {
      description: '두번째 버튼 라벨',
      if: {
        arg: 'modalType',
        neq: 'alert',
      },
      table: {
        category: 'required - confirm',
      },
    },
    secondBtnOnClick: {
      description: '두번째 버튼 함수',
      if: {
        arg: 'modalType',
        neq: 'alert',
      },
      table: {
        category: 'required - confirm',
      },
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
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1298-1365&t=pD666ta77og4q7AJ-1',
    },
    docs: {
      description: {
        story: '사용자의 결정을 확인하는 모달로 긍정적 선택 버튼을 제공합니다.',
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1298-1365&t=pD666ta77og4q7AJ-1',
    },
    docs: {
      description: {
        story: '사용자의 결정을 확인하는 모달로 부정적 선택 버튼을 제공합니다.',
      },
    },
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1298-1365&t=pD666ta77og4q7AJ-1',
    },
    docs: {
      description: {
        story: '사용자에게 중요한 메시지를 알립니다.',
      },
    },
  },
}
