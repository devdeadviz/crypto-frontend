import { Container, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const Card = () => {
  return (
    <Flex
      bg="#FFFFFF"
      borderRadius="12px"
      boxShadow="0px 1.47737px 17.7284px 4.43211px rgba(208, 214, 227, 0.3);"
      width="449.12px"
      height="132.96px"
      p={5}
    >
      <Image
        boxSize="6.25rem"
        borderRadius="10px"
        objectFit="cover"
        src="https://bit.ly/dan-abramov"
        alt="Dan Abramov"
      />
      <Container>
        <Text
          fontSize="lg"
          fontFamily="Arial"
          fontWeight="400"
          lineHeight="26.59px"
          color="#656C7E"
        >
          Take a quiz!
        </Text>
        <Text
          fontSize="xl"
          fontFamily="Inter"
          fontWeight="500"
          lineHeight="26.59px"
        >
          Learn and earn $CKBt
        </Text>
      </Container>
    </Flex>
  );
};

export { Card };
