import { Input as InputChakra } from '@chakra-ui/react'

interface InputProps {
  placeholder: string;
  type: string;
}

export const Input = ({ placeholder, type }: InputProps) => {
  return (
    <InputChakra size='lg' variant='filled' bg='#262529' placeholder={placeholder} type={type} _hover={{}} />
  )
}