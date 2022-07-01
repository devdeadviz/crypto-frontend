import { Box, IconButton, Image } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Box
      as="nav"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}
    >
      <Image src="/assets/logo.svg" />
      <Box display="flex">
        <IconButton
          aria-label="Search database"
          bg="none"
          icon={<SearchIcon />}
        />
        <IconButton aria-label="Hamburger" bg="none" icon={<HamburgerIcon />} />
        <ColorModeSwitcher />
      </Box>
    </Box>
  );
};

export { Navbar };
