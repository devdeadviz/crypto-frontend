import {
  ArrowDownIcon,
  DragHandleIcon,
  StarIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
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
  Tr,
  Th,
  Td,
  TableContainer,
  Avatar,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Flex,
  Select,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Card } from '../components';
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
            <Select
              bg="#EFF2F5"
              borderRadius="8px"
              fontFamily="Inter"
              fontStyle="normal"
              fontWeight="600"
              fontSize="12px"
              lineHeight="18px"
              height="2rem"
            >
              <option value="100">100</option>
              <option value="80">80</option>
              <option value="60">60</option>
              <option value="60">40</option>
              <option value="60">20</option>
              <option value="60">10</option>
            </Select>
          </Flex>
        </Flex>
        <TableContainer>
          <Table variant="simple" height="80px">
            <Thead>
              <Tr>
                <Th
                  fontFamily="Arial"
                  fontStyle="normal"
                  fontWeight="700"
                  fontSize="11px"
                  lineHeight="18px"
                  color="#000000"
                  pl="4.5rem"
                >
                  #
                </Th>
                <Th
                  fontFamily="Arial"
                  fontStyle="normal"
                  fontWeight="700"
                  fontSize="11px"
                  lineHeight="18px"
                  color="#000000"
                >
                  NAME
                </Th>
                <Th
                  fontFamily="Arial"
                  fontStyle="normal"
                  fontWeight="700"
                  fontSize="11px"
                  lineHeight="18px"
                  color="#000000"
                  textAlign="end"
                >
                  PRICE
                </Th>
                <Th textAlign="center">
                  <Box
                    as="span"
                    fontFamily="Arial"
                    fontStyle="normal"
                    fontWeight="700"
                    fontSize="11px"
                    lineHeight="18px"
                    textAlign="center"
                    color="#000000"
                  >
                    24H
                  </Box>
                  <ArrowDownIcon color="#0052FE" width="12px" height="9px" />
                </Th>
                <Th
                  fontFamily="Arial"
                  fontStyle="normal"
                  fontWeight="700"
                  fontSize="11px"
                  lineHeight="18px"
                  color="#000000"
                >
                  7D
                </Th>
                <Th
                  fontFamily="Arial"
                  fontStyle="normal"
                  fontWeight="700"
                  fontSize="11px"
                  lineHeight="18px"
                  color="#000000"
                >
                  MARKET CAP
                </Th>
                <Th
                  fontFamily="Arial"
                  fontStyle="normal"
                  fontWeight="700"
                  fontSize="11px"
                  lineHeight="18px"
                  color="#000000"
                >
                  VOLUME(24H)
                </Th>
                <Th
                  fontFamily="Arial"
                  fontStyle="normal"
                  fontWeight="700"
                  fontSize="11px"
                  lineHeight="18px"
                  color="#000000"
                >
                  CIRCULATING SUPPLY
                </Th>
                <Th></Th>
              </Tr>
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
                  <Tr key={index}>
                    <Td>
                      <Flex alignItems="center">
                        <StarIcon height="13px" width="13px" mr="2rem" />
                        <Box
                          as="span"
                          fontFamily="Inter"
                          fontStyle="normal"
                          fontWeight="500"
                          fontSize="15px"
                          lineHeight="21px"
                          color="#808A9D"
                        >
                          {index + 1}
                        </Box>
                      </Flex>
                    </Td>
                    <Td>
                      <Avatar size="xs" name={name} src={image} />
                      <Box
                        as="span"
                        width="max-content"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="600"
                        fontSize="14px"
                        lineHeight="24px"
                        color="#222531"
                        mx={2}
                      >
                        {name}
                      </Box>
                      <Box
                        as="span"
                        width="max-content"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="500"
                        fontSize="14px"
                        lineHeight="24px"
                        color="#808A9D"
                      >
                        {symbol.toUpperCase()}
                      </Box>
                    </Td>
                    <Td
                      fontFamily="Inter"
                      fontStyle="normal"
                      fontWeight="500"
                      fontSize="14px"
                      lineHeight="22px"
                      color="#000000"
                    >
                      ${current_price}
                    </Td>
                    <Td color="#EA3943">
                      <TriangleDownIcon width="10px" height="6px" />
                      <Box
                        as="span"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="600"
                        fontSize="13px"
                        lineHeight="16px"
                      >
                        {price_change_percentage_24h.toFixed(2)}%
                      </Box>
                    </Td>
                    <Td color="#16C784" textAlign="end">
                      <TriangleUpIcon width="10px" height="6px" />
                      <Box
                        as="span"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="600"
                        fontSize="13px"
                        lineHeight="16px"
                      >
                        {price_change_percentage_7d_in_currency.toFixed(2)}%
                      </Box>
                    </Td>
                    <Td
                      fontFamily="Inter"
                      fontStyle="normal"
                      fontWeight="500"
                      fontSize="14px"
                      lineHeight="22px"
                    >
                      ${market_cap}
                    </Td>
                    <Td
                      fontFamily="Inter"
                      fontStyle="normal"
                      fontWeight="500"
                      letterSpacing="-0.035em"
                    >
                      <Box fontSize="14px" lineHeight="22px">
                        ${total_volume}
                      </Box>
                      <Box fontSize="12px" lineHeight="15px">
                        932,071 {symbol.toUpperCase()}
                      </Box>
                    </Td>
                    <Td textAlign="end">
                      <Box
                        fontSize="14px"
                        lineHeight="22px"
                        fontFamily="Inter"
                        fontStyle="normal"
                        fontWeight="500"
                        letterSpacing="-0.035em"
                      >
                        {circulating_supply.toFixed(0)} {symbol.toUpperCase()}
                      </Box>
                      <Slider
                        aria-label="slider-ex-1"
                        colorScheme="teal"
                        defaultValue={30}
                      >
                        <SliderTrack>
                          <SliderFilledTrack />
                        </SliderTrack>
                      </Slider>
                    </Td>
                    <Td>
                      <DragHandleIcon />
                    </Td>
                  </Tr>
                )
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};

export { Crypto };
