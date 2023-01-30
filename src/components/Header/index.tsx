import { Flex, Heading } from '@chakra-ui/react';
import { Input } from '../Input';
import UserHeader from '../UserHeader';

export default function Header() {
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
      <Heading fontSize="24px" fontWeight="700" color="#FF859B">
        RocketMovies
      </Heading>
      <Input placeholder="Pesquisar pelo Título" w="60%" />
      <UserHeader />
    </Flex>
  );
}
