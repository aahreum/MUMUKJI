import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './Button'

const meta = {
  title: 'Components/common/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '머먹지에서 공통적으로 사용하는 버튼 컴포넌트입니다.',
    docs: {
      description: {
        component: ``,
      },
    },
  },
  argTypes: {
    label: {
      description: '버튼 라벨',
      table: {
        category: 'required',
      },
    },
    styleType: {
      description: '버튼 스타일',
      table: {
        category: 'optional',
      },
    },
    roundType: {
      description: '버튼 라운드 스타일',
      table: {
        category: 'optional',
      },
    },
    size: {
      description: '버튼 크기',
      table: {
        category: 'optional',
      },
    },
    color: {
      description: '버튼 컬러',
      table: {
        category: 'optional',
      },
    },
    full: {
      description: '풀 사이즈 버튼 여부',
      table: {
        category: 'optional',
      },
    },
    type: {
      description: '버튼 타입',
      table: {
        category: 'button - attributes',
      },
    },
    disabled: {
      description: '버튼 활성화 여부',
      table: {
        category: 'button - attributes',
      },
    },
    onClick: {
      description: '버튼 함수',
      table: {
        category: 'button - attributes',
      },
    },
  },
  decorators: (Story) => <div style={{ width: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{<Story />}</div>,
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof Button>

export const SolidPrimary: Story = {
  args: {
    label: '버튼',
    styleType: 'solid',
    roundType: 'loundSquare',
    color: 'primary',
    size: 'l',
    full: false,
    type: 'button',
    disabled: false,
    onClick: action('Button clicked'),
  },
}

export const SolidSecondary: Story = {
  args: {
    label: '버튼',
    styleType: 'solid',
    roundType: 'loundSquare',
    color: 'secondary',
    size: 'l',
    full: false,
    type: 'button',
    disabled: false,
    onClick: action('Button clicked'),
  },
}

export const SolidTertiary: Story = {
  args: {
    label: '버튼',
    styleType: 'solid',
    roundType: 'loundSquare',
    color: 'tertiary',
    size: 'l',
    full: false,
    type: 'button',
    disabled: false,
    onClick: action('Button clicked'),
  },
}

export const SolidNegative: Story = {
  args: {
    label: '버튼',
    styleType: 'solid',
    roundType: 'loundSquare',
    color: 'negative',
    size: 'l',
    full: false,
    type: 'button',
    disabled: false,
    onClick: action('Button clicked'),
  },
}

export const SolidDisabled: Story = {
  args: {
    label: '버튼',
    styleType: 'solid',
    roundType: 'loundSquare',
    color: 'primary',
    size: 'l',
    full: false,
    type: 'button',
    disabled: true,
    onClick: action('Button clicked'),
  },
}

export const OutlinePrimary: Story = {
  args: {
    label: '버튼',
    styleType: 'outline',
    roundType: 'loundSquare',
    color: 'primary',
    size: 'l',
    full: false,
    type: 'button',
    disabled: false,
    onClick: action('Button clicked'),
  },
}

export const OutlineSecondary: Story = {
  args: {
    label: '버튼',
    styleType: 'outline',
    roundType: 'loundSquare',
    color: 'secondary',
    size: 'l',
    full: false,
    type: 'button',
    disabled: false,
    onClick: action('Button clicked'),
  },
}

export const OutlineTertiary: Story = {
  args: {
    label: '버튼',
    styleType: 'outline',
    roundType: 'loundSquare',
    color: 'tertiary',
    size: 'l',
    full: false,
    type: 'button',
    disabled: false,
    onClick: action('Button clicked'),
  },
}

export const OutlineNegative: Story = {
  args: {
    label: '버튼',
    styleType: 'outline',
    roundType: 'loundSquare',
    color: 'negative',
    size: 'l',
    full: false,
    type: 'button',
    disabled: false,
    onClick: action('Button clicked'),
  },
}

export const OutlineDisabled: Story = {
  args: {
    label: '버튼',
    styleType: 'outline',
    roundType: 'loundSquare',
    color: 'primary',
    size: 'l',
    full: false,
    type: 'button',
    disabled: true,
    onClick: action('Button clicked'),
  },
}
