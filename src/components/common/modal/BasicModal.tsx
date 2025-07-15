import styles from './basicModal.module.scss'
import { BasicModalProps } from '@/types/BasicModalTypes'
import Button from '@/components/common/button/Button'
import ModalDimmed from './ModalDimmed'
import ModalPotal from './ModalPotal'

const BasicModal = (props: BasicModalProps) => {
  const { modalType, title, desc, firstBtnLabel, firstBtnOnClick } = props
  return (
    <ModalPotal>
      <ModalDimmed />
      <div className={styles.container}>
        <div className={styles.textArea}>
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
        <div className={styles.buttonArea}>
          {modalType === 'alert' ? (
            <Button styleType="outline" roundType="square" color="tertiary" size="s" label={firstBtnLabel} onClick={firstBtnOnClick} />
          ) : (
            <>
              <Button
                color={modalType === 'confirmN' ? 'negative' : 'tertiary'}
                styleType={modalType === 'confirmN' ? 'solid' : 'outline'}
                roundType="square"
                size="s"
                label={firstBtnLabel}
                onClick={firstBtnOnClick}
              />
              <Button
                styleType={modalType === 'confirmN' ? 'outline' : 'solid'}
                color={modalType === 'confirmN' ? 'tertiary' : 'secondary'}
                roundType="square"
                size="s"
                label={props.secondBtnLabel}
                onClick={props.secondBtnOnClick}
              />
            </>
          )}
        </div>
      </div>
    </ModalPotal>
  )
}

export default BasicModal
