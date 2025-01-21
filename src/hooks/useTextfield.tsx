import { useRecoilState } from 'recoil'
import { textfieldData } from '@/recoil/textfieldData'

const useTextfield = () => {
  const [textfield, setTextfield] = useRecoilState(textfieldData)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextfield(e.target.value)
  }
  const handleInputDelete = () => {
    setTextfield('')
  }

  return { textfield, handleInputChange, handleInputDelete }
}

export default useTextfield
