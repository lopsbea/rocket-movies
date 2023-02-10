import { Flex, Heading } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { Input } from '../Input';
import UserHeader from '../UserHeader';

export default function Header() {
  const { push } = useRouter();
  return (
    <Flex
      w="100%"
      h="116px"
      padding="1rem 2rem"
      gap="1rem"
      justify="space-evenly"
      alignItems="center"
      borderBottom="1px solid #3E3B47"
    >
      <Heading
        fontSize="24px"
        fontWeight="700"
        color="#FF859B"
        onClick={() => push('/home')}
        _hover={{ cursor: 'pointer' }}
      >
        RocketMovies
      </Heading>
      <Input
        ml="1rem"
        placeholder="Pesquisar pelo Título"
        w="90%"
        textOverflow="ellipsis"
      />
      <UserHeader />
    </Flex>
  );
}
