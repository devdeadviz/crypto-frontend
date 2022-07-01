import { StarIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
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
      <Heading as="h2" fontSize="24px" fontFamily="Inter" my={5}>
        Top 100 Cryptocurrencies by Market Cap
      </Heading>
      <HStack spacing="16px">
        <Tag size="94px" p="8px">
          <TagLeftIcon as={StarIcon} />
          <TagLabel
            size="12px"
            fontFamily="Inter"
            fontWeight="500"
            lineHeight="18px"
          >
            Favourites
          </TagLabel>
        </Tag>
        <Tag size="94px" p="8px">
          <TagLabel
            size="12px"
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="18px"
            color="#3861FB"
          >
            CryptoCurrencies
          </TagLabel>
        </Tag>
        <Tag size="94px" p="8px">
          <TagLabel
            size="12px"
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="18px"
            color=" #5B667C"
            letterSpacing="-0.03em"
          >
            DeFi
          </TagLabel>
        </Tag>
        <Tag size="94px" p="8px">
          <TagLabel
            size="12px"
            fontFamily="Inter"
            fontStyle="normal"
            fontWeight="600"
            lineHeight="18px"
            color=" #5B667C"
          >
            NFTs & Collectibles
          </TagLabel>
        </Tag>
      </HStack>
    </Box>
  );
};

export { Crypto };
