import { Box } from '@chakra-ui/react';

interface CardBadgeProps {
  label: string;
}

export default function CardBadge({ label }: CardBadgeProps) {
  return (
    <Box
      bgColor="#312E38"
      color="#fff"
      h="24px"
      borderRadius="8px"
      p="5px 16px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontWeight={400}
      fontSize="14px"
    >
      {label}
    </Box>
  );
}
