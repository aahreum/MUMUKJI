import Button from '@/components/common/button/Button'
import styles from './resultModal.module.scss'
import FullModalCotainer from '@/components/common/modal/FullModalCotainer'
import Title from '@/components/common/title/Title'
import { useEffect, useState } from 'react'

interface ResultModalProps {
  menu: string
  theme: string
  close: () => void
}

const ResultModal = ({ menu, theme, close }: ResultModalProps) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <FullModalCotainer onClick={close}>
      <div className={styles.container}>
        {loading ? (
          <>
            <Title>음식 고민중...</Title>
            <div className={styles.bubbleArea}>
              <span className={styles.hmm} />
            </div>
            <img className={styles.imageArea} src="/images/rouletteLoading.png" alt="로딩" />
            <div className={styles.buttonArea}>
              <Button disabled label="다시 뽑아줘" />
              <Button disabled label="이거 먹을래!" />
            </div>
          </>
        ) : (
          <>
            <Title>이거 어때?</Title>
            <p>{theme}</p>
            <p>{menu}</p>
          </>
        )}
      </div>
    </FullModalCotainer>
  )
}

export default ResultModal
