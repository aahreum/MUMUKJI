import styles from './basicModal.module.scss'
import Button from '@/components/common/button/Button'
import ModalBG from './ModalBG'
import ModalPotal from './ModalPotal'

interface BasicModalProps {
  title: React.ReactNode
  desc: React.ReactNode
  firstBtnColor: 'basic' | 'secondary' | 'primary'
  firstBtnLabel: string
  firstBtnOnClick: () => void
  secondBtnColor?: 'basic' | 'secondary' | 'primary'
  secondBtnLabel?: string
  secondBtnOnClick?: () => void
}

const BasicModal = ({ title, desc, firstBtnColor, firstBtnLabel, firstBtnOnClick, secondBtnColor, secondBtnLabel, secondBtnOnClick }: BasicModalProps) => {
  return (
    <ModalPotal>
      <>
        <ModalBG />
        <div className={styles.container}>
          <div className={styles.textArea}>
            <p className={styles.title}>{title}</p>
            <p className={styles.desc}>{desc}</p>
          </div>
          <div className={styles.buttonArea}>
            <Button color={firstBtnColor} size="m" label={firstBtnLabel} onClick={firstBtnOnClick} />
            {secondBtnLabel && <Button color={secondBtnColor} size="m" label={secondBtnLabel} onClick={secondBtnOnClick} />}
          </div>
        </div>
      </>
    </ModalPotal>
  )
}

export default BasicModal
