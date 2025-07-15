import { useRecoilState } from 'recoil'
import { textfieldData } from '@/recoil/textfieldData'

const useTextfield = (key: string) => {
  const [textfield, setTextfield] = useRecoilState(textfieldData(key))

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextfield(e.target.value)
  }

  const handleInputDelete = () => {
    setTextfield('')
  }

  return { textfield, handleInputChange, handleInputDelete }
}

export default useTextfield
