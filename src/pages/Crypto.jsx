import { Box, HStack } from '@chakra-ui/react';
import { Card } from '../components';

const Crypto = () => {
  const cardData = [
    {
      id: '1',
      title: 'Take a quiz!',
      description: 'Learn and earn $CKB',
      image: '/assets/image1.svg',
    },
    {
      id: '2',
      title: 'Portfolio 🔥',
      description: 'Track your trades in one place, not all over the place',
      image: '/assets/image2.svg',
    },
    {
      id: '3',
      title: 'Portfolio',
      description: 'Track your trades in one place, not all over the place',
      image: '/assets/image3.svg',
    },
  ];
  return (
    <Box pt="35px">
      <HStack spacing="24px">
        {cardData.map(data => (
          <Card key={data.id} data={data} />
        ))}
      </HStack>
    </Box>
  );
};

export { Crypto };
