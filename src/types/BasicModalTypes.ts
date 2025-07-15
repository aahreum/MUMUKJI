export type BasicModalProps =
  | {
      modalType: 'alert'
      title: React.ReactNode
      desc: React.ReactNode
      firstBtnLabel: string
      firstBtnOnClick: () => void
    }
  | {
      modalType: 'confirmN' | 'confirmP'
      title: React.ReactNode
      desc: React.ReactNode
      firstBtnLabel: string
      firstBtnOnClick: () => void
      secondBtnLabel: string
      secondBtnOnClick: () => void
    }
