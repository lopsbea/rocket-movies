import { Button, ButtonProps } from '@chakra-ui/react';

interface PinkButtonProps extends ButtonProps {
  label: string;
}

export default function PinkButton({ label, ...rest }: PinkButtonProps) {
  return (
    <Button
      size="lg"
      bg="#FF859B"
      color="#312E38"
      _hover={{ backgroundColor: '#DB6182' }}
      {...rest}
    >
      {label}
    </Button>
  );
}
