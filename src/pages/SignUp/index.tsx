import { Input } from '@/components/Input';
import LoginLayout from '@/components/LoginLayout';
import { Flex, IconButton, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { BiLockAlt } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { useRouter } from 'next/router';
import PinkButton from '@/components/PinkButton';

export default function SignUp() {
  const { push } = useRouter();

  const onSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    push('/login');
  };

  return (
    <LoginLayout text="Crie sua conta">
      <Flex flexDir="column" gap=".5rem" as="form" onSubmit={onSubmit}>
        <Input placeholder="Nome" type="text" icon={<FiUser />} />
        <Input placeholder="E-mail" type="email" icon={<HiOutlineEnvelope />} />
        <Input placeholder="Senha" type="password" icon={<BiLockAlt />} />

        <PinkButton type="submit" label="Cadastrar" />
      </Flex>

      <Link href="../login">
        <Text textAlign="center" fontWeight="500" color="#FF859B" size="2xl">
          <IconButton
            backgroundColor="transparent"
            aria-label="Search database"
            icon={<AiOutlineArrowLeft fontWeight="500" />}
          />
          Voltar para o login
        </Text>
      </Link>
    </LoginLayout>
  );
}
