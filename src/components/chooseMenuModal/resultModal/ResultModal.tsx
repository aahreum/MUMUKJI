import { useEffect, useState } from 'react'
import styles from './resultModal.module.scss'
import Button from '@/components/common/button/Button'
import FullModalCotainer from '@/components/common/modal/FullModalCotainer'
import Title from '@/components/common/title/Title'
import useModal from '@/hooks/useModal'

interface ResultModalProps {
  menu: string
  theme: string
  close: () => void
  onRetry: () => void
}

const ResultModal = ({ menu, theme, close, onRetry }: ResultModalProps) => {
  const [loading, setLoading] = useState(true)
  const { closeAllModal } = useModal()

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [loading])

  const handleSelect = () => {
    closeAllModal()
    // 이후 머먹었더라 페이지 추가시 로직 추가 예정
  }

  return (
    <FullModalCotainer onClick={close}>
      <div className={styles.container}>
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
              <p className={styles.theme}>{theme}</p>
              <p className={styles.menu}>{menu}</p>
            </div>
            <img className={styles.image} src="/images/rouletteResult.png" alt="결과" />
          </>
        )}
        <div className={styles.buttonArea}>
          <Button
            disabled={loading}
            primary={false}
            label="다시 뽑아줘"
            onClick={() => {
              setLoading(true)
              onRetry()
            }}
          />
          <Button disabled={loading} label="이거 먹을래!" onClick={handleSelect} />
        </div>
      </div>
    </FullModalCotainer>
  )
}

export default ResultModal
