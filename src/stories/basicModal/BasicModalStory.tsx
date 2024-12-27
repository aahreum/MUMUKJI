import styles from '@/components/common/modal/basicModal.module.scss'
import { BasicModalProps } from '@/types/BasicModalTypes'
import Button from '@/components/common/button/Button'

const BasicModal = (props: BasicModalProps) => {
  const { modalType, title, desc, firstBtnLabel, firstBtnOnClick } = props
  return (
    <>
      <div style={{ width: '600px', height: '400px', backgroundColor: 'rgba(0, 0, 0, 0.4)' }} />
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
    </>
  )
}

export default BasicModal
