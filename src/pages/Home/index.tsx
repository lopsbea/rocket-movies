import Header from '@/components/Header';
import Layout from '@/components/Layout';
import MovieCard from '@/components/MovieCard';
import PinkButton from '@/components/PinkButton';
import { Flex, Heading } from '@chakra-ui/react';

const Home = () => {
  return (
    <Layout>
      <Flex justify="space-between" mb="2rem" position="sticky">
        <Heading color="#fff" fontWeight="500">
          Meus Filmes
        </Heading>
        <PinkButton label="Adicionar Filme" />
      </Flex>
      <Flex
        height="100%"
        overflowY="auto"
        flexDir="column"
        gap="1rem"
        css={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            width: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#FF859B',
            borderRadius: '24px',
          },
        }}
      >
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </Flex>
    </Layout>
  );
};
export default Home;
