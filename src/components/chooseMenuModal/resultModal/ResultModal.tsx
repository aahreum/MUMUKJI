import { useEffect, useState } from 'react'
import styles from './resultModal.module.scss'
import Button from '@/components/common/button/Button'
import FullModalCotainer from '@/components/common/modal/FullModalCotainer'
import Title from '@/components/common/title/Title'
import useModal from '@/hooks/useModal'

interface ResultModalProps {
  menu: string
  theme: string
  icon: string
  close: () => void
  onRetry: () => void
}

const ResultModal = ({ menu, theme, close, icon, onRetry }: ResultModalProps) => {
  const [loading, setLoading] = useState(true)
  const { closeAllModal } = useModal('resultModal')

  useEffect(() => {
    if (menu && theme && icon) {
      setLoading(true)
      const timer = setTimeout(() => {
        setLoading(false)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [menu, theme, icon])

  const handleSelect = () => {
    closeAllModal()
    // 이후 머먹었더라 페이지 추가시 로직 추가 예정
  }

  const handleRetry = () => {
    onRetry()
  }

  if (!menu || !theme) {
    return (
      <FullModalCotainer onClick={close}>
        <div className={styles.container}>
          <div className={styles.contentsArea}>
            <Title>로딩 중...</Title>
            <div className={styles.loadingBubble}>
              <span className={styles.hmm} />
            </div>
            <img className={styles.image} src="/images/rouletteLoading.png" alt="로딩" />
          </div>
        </div>
      </FullModalCotainer>
    )
  }

  return (
    <FullModalCotainer onClick={close}>
      <div className={styles.container}>
        <div className={styles.contentsArea}>
          {loading ? (
            <>
              <Title>음식 고민중...</Title>
              <div className={styles.loadingBubble}>
                <span className={styles.hmm} />
              </div>
              <img className={styles.image} src="/images/rouletteLoading.png" alt="로딩" />
            </>
          ) : (
            <>
              <Title>이거 어때?</Title>
              <div className={styles.resultBubble}>
                <img width={40} height={40} src={icon} alt={theme} />
                <p className={styles.theme}>{theme}</p>
                <p className={styles.menu}>{menu}</p>
              </div>
              <img className={styles.image} src="/images/rouletteResult.png" alt="결과" />
            </>
          )}
        </div>
        <div className={styles.buttonArea}>
          <Button disabled={loading} label="다시 뽑아줘" full={true} styleType="outline" color="tertiary" onClick={handleRetry} />
          <Button disabled={loading} label="이거 먹을래!" full={true} onClick={handleSelect} />
        </div>
      </div>
    </FullModalCotainer>
  )
}

export default ResultModal
