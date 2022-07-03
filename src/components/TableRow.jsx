import {
  DragHandleIcon,
  StarIcon,
  TriangleDownIcon,
  TriangleUpIcon,
} from '@chakra-ui/icons';
import {
  Box,
  Tr,
  Td,
  Avatar,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  Flex,
} from '@chakra-ui/react';

const TableRow = ({
  name,
  image,
  symbol,
  current_price,
  price_change_percentage_24h,
  price_change_percentage_7d_in_currency,
  market_cap,
  total_volume,
  circulating_supply,
  index,
}) => {
  return (
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
        <Slider aria-label="slider-ex-1" colorScheme="teal" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
        </Slider>
      </Td>
      <Td>
        <DragHandleIcon />
      </Td>
    </Tr>
  );
};

export { TableRow };
