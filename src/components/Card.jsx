import { Container, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Card = ({ data }) => {
  return (
    <Flex
      bg="#FFFFFF"
      borderRadius="12px"
      boxShadow="0px 1.47737px 17.7284px 4.43211px rgba(208, 214, 227, 0.3);"
      width={['20rem', '28rem']}
      height="8.3rem"
      m={['10px', '1rem']}
      flexShrink={0}
      p={['4', '5']}
    >
      <Image
        boxSize="6.25rem"
        borderRadius="10px"
        objectFit="cover"
        src={data.image}
        alt={data.title}
      />
      <Container p={['5px']}>
        <Text
          fontSize={['sm', 'lg']}
          fontFamily="Arial"
          fontWeight="400"
          lineHeight="26.59px"
          color="#656C7E"
        >
          {data.title}
        </Text>
        <Text
          fontSize={['lg', 'xl']}
          fontFamily="Inter"
          fontWeight="500"
          lineHeight="26.59px"
        >
          {data.description}
        </Text>
      </Container>
    </Flex>
  );
};

export { Card };
