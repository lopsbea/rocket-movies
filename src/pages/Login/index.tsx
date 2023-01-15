import { Button, Center, Flex, Heading, Image, Input, InputLeftElement, Text } from "@chakra-ui/react";
import { Card, Container } from "./styles";
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { BiLockAlt } from 'react-icons/bi';
import { useRouter } from "next/router";
import Link from "next/link";

export default function Login() {
    const { push } = useRouter();

    const onSubmit = () => {
        push('/Home');
    }

    return (
            <Container>
            <Center w='50vw' h='100vh'>
                <Flex flexDir='column' gap='2rem' w='350px' >

                <div>
                <Heading color='#FF859B' fontWeight='700' fontStyle='normal' fontSize='49px' lineHeight='63px' >RocketMovies</Heading>
                <Text color='#CAC4CF'>Aplicação para acompanhar tudo que assistir.</Text>
                </div>
                <Text color='#CAC4CF' fontWeight='500' textAlign='left'>Faça seu login.</Text>

                <Flex flexDir='column' gap='.5rem' as='form' onSubmit={onSubmit}>
                   
                   
                    <Button size='lg' bg='#FF859B' color='#312E38' type='submit'>Entrar</Button>
                </Flex>

                <Link href='../SignUp'>
                <Text textAlign='center' fontWeight='400' color='#FF859B' size='2xl' >Criar conta</Text>
                </Link>
                </Flex>
            </Center>
            <Image alt='' src='/images/something-magical.png' w='50%' h='100%' />
   	        </Container>
    );
};