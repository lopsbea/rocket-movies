/* eslint-disable react/no-unescaped-entities */
import CardBadge from '@/components/CardBadge';
import Layout from '@/components/Layout';
import {
  Heading,
  IconButton,
  Link,
  Text,
  Image,
  Flex,
  Avatar,
  Box,
} from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { HiOutlineClock } from 'react-icons/hi2';

export default function MoviePreview() {
  return (
    <Layout>
      <Link href="./home" _hover={{ cursor: 'pointer' }}>
        <Text textAlign="left" fontWeight="500" color="#FF859B" size="2xl">
          <IconButton
            backgroundColor="transparent"
            aria-label="Search database"
            icon={<AiOutlineArrowLeft fontSize="22px" />}
            _hover={{}}
            height="32px"
          />
          Voltar
        </Text>
      </Link>
      <Flex gap="1rem" alignItems="center">
        <Heading
          color="rgba(244, 237, 232, 1)"
          fontSize="36px"
          fontWeight="600"
          lineHeight="47px"
        >
          Interestellar
        </Heading>
        <Image alt="" src="images/group_7579.svg" height="25px" />
      </Flex>
      <Flex
        fontWeight="500"
        height="20px"
        gap="8px"
        alignItems="center"
        mt="24px"
        fontSize="18px"
        color="
        rgba(244, 237, 232, 1)"
      >
        <Avatar name="Rodrigo Gonçalves" size="xs" />
        <Text>Por Rodrigo Golçalves </Text>
        <HiOutlineClock color="#FF859B" fontSize="20px" />
        <Text fontSize="18px">10/02/2023 16:40</Text>
      </Flex>
      <Flex gap="8px" m="40px 0">
        <CardBadge label="Ficção Científica" />
        <CardBadge label="Drama" />
        <CardBadge label="Família" />
      </Flex>
      <Box
        color="rgba(244, 237, 232, 1)"
        lineHeight="21px"
        fontSize="16px"
        width="100%"
        fontWeight="500"
        textAlign="justify"
      >
        <Text>
          Pragas nas colheitas fizeram a civilização humana regredir para uma
          sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da
          NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de
          Cooper, acredita que seu quarto está assombrado por um fantasma que
          tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é
          uma inteligência desconhecida que está enviando mensagens codificadas
          através de radiação gravitacional, deixando coordenadas em binário que
          os levam até uma instalação secreta da NASA liderada pelo professor
          John Brand. O cientista revela que um buraco de minhoca foi aberto
          perto de Saturno e que ele leva a planetas que podem oferecer
          condições de sobrevivência para a espécie humana. As "missões Lázaro"
          enviadas anos antes identificaram três planetas potencialmente
          habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann
          – nomeados em homenagem aos astronautas que os pesquisaram. Brand
          recruta Cooper para pilotar a nave espacial Endurance e recuperar os
          dados dos astronautas; se um dos planetas se mostrar habitável, a
          humanidade irá seguir para ele na instalação da NASA, que é na
          realidade uma enorme estação espacial. A partida de Cooper devasta
          Murphy.
          <br />
          <br />
          Além de Cooper, a tripulação da Endurance é formada pela bióloga
          Amelia, filha de Brand; o cientista Romilly, o físico planetário
          Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e
          se dirigem a Miller, porém descobrem que o planeta possui enorme
          dilatação gravitacional temporal por estar tão perto de Gargântua:
          cada hora na superfície equivale a sete anos na Terra. Eles entram em
          Miller e descobrem que é inóspito já que é coberto por um oceano raso
          e agitado por ondas enormes. Uma onda atinge a tripulação enquanto
          Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a
          partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que
          23 anos se passaram.
        </Text>
      </Box>
    </Layout>
  );
}
