import styles from '@/components/common/modal/basicModal.module.scss'
import Button from '@/components/common/button/Button'
import { buttonColorTypes } from '@/types/buttonColorTypes'

interface BasicModalProps {
  title: React.ReactNode
  desc: React.ReactNode
  firstBtnColor: buttonColorTypes
  firstBtnLabel: string
  firstBtnOnClick: () => void
  secondBtnColor?: buttonColorTypes
  secondBtnLabel?: string
  secondBtnOnClick?: () => void
}

const BasicModal = ({ title, desc, firstBtnColor, firstBtnLabel, firstBtnOnClick, secondBtnColor, secondBtnLabel, secondBtnOnClick }: BasicModalProps) => {
  return (
    <>
      <div style={{ width: '600px', height: '400px', backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
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
  )
}

export default BasicModal
