import { Button, Flex, Text } from '@chakra-ui/react';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { BiLockAlt } from 'react-icons/bi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Input } from '@/components/Input';
import LoginLayout from '@/components/LoginLayout';
import React from 'react';

const Login = () => {
  const { push } = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    push('/Home');
  };

  return (
    <LoginLayout text="Faça seu login">
      <Flex flexDir="column" gap=".5rem" as="form" onSubmit={onSubmit}>
        <Input placeholder="E-mail" type="email" icon={<HiOutlineEnvelope />} />
        <Input placeholder="Senha" type="password" icon={<BiLockAlt />} />

        <Button
          size="lg"
          bg="#FF859B"
          color="#312E38"
          _hover={{}}
          type="submit"
        >
          Entrar
        </Button>
      </Flex>

      <Link href="../SignUp">
        <Text textAlign="center" fontWeight="400" color="#FF859B" size="2xl">
          Criar conta
        </Text>
      </Link>
    </LoginLayout>
  );
};

export default Login;
