import { Avatar, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function UserHeader() {
  const { push } = useRouter();
  return (
    <Flex
      h="100%"
      fontSize="14px"
      width="fit-content"
      alignItems="center"
      gap="1rem"
    >
      <div style={{ width: 'max-content' }}>
        <Text color="#F4EDE8" fontWeight="700">
          Rodrigo Gonçalves
        </Text>
        <Link href="/login" color="#948F99">
          sair
        </Link>
      </div>
      <Avatar
        name="Rodrigo Gonçalves"
        size="md"
        onClick={() => push('/profile')}
      />
    </Flex>
  );
}
