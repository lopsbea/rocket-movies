import {
  Input as InputChakra,
  InputGroup,
  InputLeftElement,
  InputProps as InputPropsChakra,
} from '@chakra-ui/react';

interface InputProps extends InputPropsChakra {
  icon?: React.ReactNode;
}

export const Input = ({ icon, ...rest }: InputProps) => {
  return (
    <InputGroup borderRadius="10px" size="lg">
      {icon && (
        <InputLeftElement pointerEvents="none" color="#948F99">
          {icon}
        </InputLeftElement>
      )}
      <InputChakra
        variant="filled"
        bg="#262529"
        _hover={{}}
        color="#948F99"
        {...rest}
      />
    </InputGroup>
  );
};
