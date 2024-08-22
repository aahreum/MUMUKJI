import { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import BasicModal from './BasicModalStory'

const meta = {
  title: 'Components/common/BasicModl',
  component: BasicModal,
  parameters: {
    componentSubtitle: '공통으로 사용하는 모달 컴포넌트입니다.',
    docs: {
      description: {
        component: `<li>title: 모달의 제목을 입력합니다.</li><li>desc: 모달의 설명을 입력합니다.</li><li>firstBtnColor, secondBtnColor: 버튼 컬러 값으로 <span className='css-o1d7ko css-in3yi3'>'primary' | 'secondary' | 'negative' | 'basic'</span> 중 하나를 선택할 수 있습니다.</li><li>firstBtnLabel, secondBtnLabel: 버튼의 텍스트를 입력합니다.</li>
        
        `,
      },
    },
  },
  decorators: (story) => <div style={{ height: '400px', backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>{story()}</div>,
  tags: ['autodocs'],
} satisfies Meta<typeof BasicModal>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    title: '그룹을 저장할까요?',
    desc: (
      <>
        수정 전의 내용은 삭제되며 <br /> 되돌릴 수 없습니다.
      </>
    ),
    firstBtnColor: 'basic',
    firstBtnLabel: '취소',
    firstBtnOnClick: action('Button clicked'),
    secondBtnColor: 'primary',
    secondBtnLabel: '저장하기',
    secondBtnOnClick: action('Button clicked'),
  },
}
