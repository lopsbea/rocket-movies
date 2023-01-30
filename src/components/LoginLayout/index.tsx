import { Container } from '@/pages/style';
import { Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface LoginLayoutPage {
  children: ReactNode;
  text: string;
}

export default function LoginLayout({ children, text }: LoginLayoutPage) {
  return (
    <Container>
      <Center w="45vw" h="100vh">
        <Flex flexDir="column" gap="2rem" w="350px">
          <div>
            <Heading
              color="#FF859B"
              fontWeight="700"
              fontStyle="normal"
              fontSize="49px"
              lineHeight="63px"
            >
              RocketMovies
            </Heading>
            <Text color="#CAC4CF">
              Aplicação para acompanhar tudo que assistir.
            </Text>
          </div>
          <Text
            color="#CAC4CF"
            fontWeight="500"
            textAlign="left"
            fontSize="32px"
          >
            {text}
          </Text>
          {children}
        </Flex>
      </Center>
      <Image
        alt=""
        src="/images/something-magical.png"
        maxWidth="55%"
        w="fit-content"
        marginRight="0"
        h="100%"
      />
    </Container>
  );
}
