import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@chakra-ui/icons';
import {
  Box,
  Heading,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Table,
  Thead,
  Tbody,
  TableContainer,
  Flex,
  Show,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Card, SelectMenu, TableHead, TableRow } from '../components';
import { getCoins } from '../services';

const Crypto = () => {
  const [cryptoCoinsData, setCryptoCoinsData] = useState([]);

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

  useEffect(() => {
    (async () => {
      const data = await getCoins();
      setCryptoCoinsData(data);
    })();
  }, []);

  return (
    <Flex alignItems="center" justifyContent="center">
      <Box pt="35px" minHeight="100vh" maxWidth="228.3rem" width="90%">
        <HStack spacing="24px">
          {cardData.map(data => (
            <Card key={data.id} data={data} />
          ))}
        </HStack>
        <Heading as="h2" fontSize="24px" fontFamily="Inter" my={5}>
          Top 100 Cryptocurrencies by Market Cap
        </Heading>
        <Show breakpoint="(min-width: 780px)">
          <Flex justifyContent="space-between" my={5}>
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
            <Flex alignItems="center">
              <Box
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="400"
                fontSize="14px"
                lineHeight="18px"
                textAlign="center"
                letterSpacing="-0.03em"
                color="#5B667C"
                flexShrink={0}
                mx={1}
              >
                show rows
              </Box>
              <SelectMenu />
            </Flex>
          </Flex>
        </Show>
        <TableContainer>
          <Table variant="simple" height="80px">
            <Thead>
              <TableHead />
            </Thead>
            <Tbody>
              {cryptoCoinsData.map(
                (
                  {
                    name,
                    image,
                    symbol,
                    current_price,
                    price_change_percentage_24h,
                    price_change_percentage_7d_in_currency,
                    market_cap,
                    total_volume,
                    circulating_supply,
                  },
                  index
                ) => (
                  <TableRow
                    key={index}
                    name={name}
                    image={image}
                    symbol={symbol}
                    current_price={current_price}
                    price_change_percentage_24h={price_change_percentage_24h}
                    price_change_percentage_7d_in_currency={
                      price_change_percentage_7d_in_currency
                    }
                    market_cap={market_cap}
                    total_volume={total_volume}
                    circulating_supply={circulating_supply}
                    index={index}
                  />
                )
              )}
            </Tbody>
          </Table>
        </TableContainer>
        <Flex justifyContent="flex-end" my={8}>
          <ButtonGroup variant="outline" spacing="2">
            <Button disabled variant="solid" bg="#919EAB">
              <ChevronLeftIcon color="#C4CDD5" />
            </Button>
            <Button colorScheme="blue">1</Button>
            <Button>2</Button>
            <Button>...</Button>
            <Button>9</Button>
            <Button>10</Button>
            <Button>
              <ChevronRightIcon color="#C4CDD5" />
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
    </Flex>
  );
};

export { Crypto };
