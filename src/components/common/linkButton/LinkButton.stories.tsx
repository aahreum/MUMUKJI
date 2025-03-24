import { Meta, StoryObj } from '@storybook/react'
import LinkButton from './LinkButton'
import { BrowserRouter } from 'react-router-dom'

const meta = {
  title: 'Components/common/LinkButton',
  component: LinkButton,
  tags: ['autodocs'],
  parameters: {
    componentSubtitle: '머먹지에서 페이지를 이동할때 사용하는 링크 버튼 컴포넌트입니다.',
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
    icon: {
      control: 'text',
      description: '아이콘',
      table: {
        category: 'optional',
        type: { summary: 'ReactNode' },
      },
    },
    full: {
      description: '풀 사이즈 버튼 여부',
      table: {
        category: 'optional',
      },
    },
  },
  decorators: (Story) => (
    <BrowserRouter>
      <div style={{ width: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{<Story />}</div>
    </BrowserRouter>
  ),
} satisfies Meta<typeof LinkButton>

export default meta

type Story = StoryObj<typeof LinkButton>

export const SolidPrimary: Story = {
  args: {
    link: '/mumukji',
    label: '홈으로 돌아가기',
    styleType: 'solid',
    roundType: 'loundSquare',
    color: 'primary',
    size: 'l',
    full: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1780-6938&t=pD666ta77og4q7AJ-1',
    },
  },
}

export const SolidSecondary: Story = {
  args: {
    link: '/mumukji',
    label: '홈으로 돌아가기',
    styleType: 'solid',
    roundType: 'loundSquare',
    color: 'secondary',
    size: 'l',
    full: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1780-6938&t=pD666ta77og4q7AJ-1',
    },
  },
}

export const SolidTertiary: Story = {
  args: {
    link: '/mumukji',
    label: '홈으로 돌아가기',
    styleType: 'solid',
    roundType: 'loundSquare',
    color: 'tertiary',
    size: 'l',
    full: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1183-863&t=ORHh7KkT6wejj3uq-1',
    },
  },
}

export const SolidNegative: Story = {
  args: {
    link: '/mumukji',
    label: '홈으로 돌아가기',
    styleType: 'solid',
    roundType: 'loundSquare',
    color: 'negative',
    size: 'l',
    full: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1183-863&t=ORHh7KkT6wejj3uq-1',
    },
  },
}

export const OutlinePrimary: Story = {
  args: {
    link: '/mumukji',
    label: '홈으로 돌아가기',
    styleType: 'outline',
    roundType: 'loundSquare',
    color: 'primary',
    size: 'l',
    full: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1183-863&t=ORHh7KkT6wejj3uq-1',
    },
  },
}

export const OutlineSecondary: Story = {
  args: {
    link: '/mumukji',
    label: '홈으로 돌아가기',
    styleType: 'outline',
    roundType: 'loundSquare',
    color: 'secondary',
    size: 'l',
    full: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1183-863&t=ORHh7KkT6wejj3uq-1',
    },
  },
}

export const OutlineTertiary: Story = {
  args: {
    link: '/mumukji',
    label: '홈으로 돌아가기',
    styleType: 'outline',
    roundType: 'loundSquare',
    color: 'tertiary',
    size: 'l',
    full: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1183-863&t=ORHh7KkT6wejj3uq-1',
    },
  },
}

export const OutlineNegative: Story = {
  args: {
    link: '/mumukji',
    label: '홈으로 돌아가기',
    styleType: 'outline',
    roundType: 'loundSquare',
    color: 'negative',
    size: 'l',
    full: true,
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/3JlzBW0AXeJyALzwGYiyDf/0.1?node-id=1183-863&t=ORHh7KkT6wejj3uq-1',
    },
  },
}
