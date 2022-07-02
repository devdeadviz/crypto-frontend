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
    <Box pt="35px" height="100vh">
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
                  isNumeric
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
                isNumeric
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
                isNumeric
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
                isNumeric
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
                isNumeric
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
            <Tr>
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
                    1
                  </Box>
                </Flex>
              </Td>
              <Td>
                <Avatar
                  size="xs"
                  name="Dan Abrahmov"
                  src="https://bit.ly/dan-abramov"
                />
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
                  Bitcoin
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
                  BTC
                </Box>
              </Td>
              <Td
                isNumeric
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="500"
                fontSize="14px"
                lineHeight="22px"
                color="#000000"
              >
                $20,055.25
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
                  0.65%
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
                  0.65%
                </Box>
              </Td>
              <Td
                isNumeric
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="500"
                fontSize="14px"
                lineHeight="22px"
              >
                $1,502,989,963,439,782
              </Td>
              <Td
                isNumeric
                fontFamily="Inter"
                fontStyle="normal"
                fontWeight="500"
                letterSpacing="-0.035em"
              >
                <Box fontSize="14px" lineHeight="22px">
                  $51,502,989,963,439
                </Box>
                <Box fontSize="12px" lineHeight="15px">
                  932,071 BTC
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
                  18,648,248 BTC
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
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export { Crypto };
