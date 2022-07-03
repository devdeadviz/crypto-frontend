import { Box, Flex, IconButton, Image } from '@chakra-ui/react';
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      bg="#FFFFFF"
      borderBottomColor="#E5E5E5"
    >
      <Box
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
        maxWidth="228.3rem"
        width="90%"
      >
        <Image src="/assets/logo.svg" />
        <Box display="flex">
          <IconButton
            aria-label="Search database"
            bg="none"
            icon={<SearchIcon />}
          />
          <IconButton
            aria-label="Hamburger"
            bg="none"
            icon={<HamburgerIcon />}
          />
        </Box>
      </Box>
    </Flex>
  );
};

export { Navbar };
