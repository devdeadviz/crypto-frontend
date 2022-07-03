import { Select } from '@chakra-ui/react';

const SelectMenu = () => {
  return (
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
  );
};

export { SelectMenu };
