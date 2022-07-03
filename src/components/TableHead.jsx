import { ArrowDownIcon } from '@chakra-ui/icons';
import { Box, Tr, Th } from '@chakra-ui/react';

const TableHead = () => {
  return (
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
        textAlign="end"
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
        textAlign="end"
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
        textAlign="end"
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
        textAlign="end"
      >
        CIRCULATING SUPPLY
      </Th>
      <Th></Th>
    </Tr>
  );
};

export { TableHead };
