import { Avatar, Flex, Text } from '@chakra-ui/react';

export default function UserHeader() {
  return (
    <Flex h="100%" fontSize="14px" width="20%" alignItems="center">
      <div>
        <Text color="#F4EDE8" fontWeight="700">
          Rodrigo Gonçalves
        </Text>
        <p color="#948F99" style={{ textAlign: 'end' }}>
          sair
        </p>
      </div>
      <Avatar name="Rodrigo Gonçalves" size="md" />
    </Flex>
  );
}
