import { Box, Flex, Hide, IconButton, Image } from '@chakra-ui/react';
import { SearchIcon, HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent={['flex-start', 'center']}
      bg="#FFFFFF"
      borderBottomColor="#E5E5E5"
    >
      <Box
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent={[null, 'space-between']}
        flexDirection={['row-reverse', 'row']}
        p={2}
        maxWidth="228.3rem"
        width={[null, '90%']}
      >
        <Image src="/assets/logo.svg" />
        <Box display="flex">
          <Hide breakpoint="(max-width: 780px)">
            <IconButton
              aria-label="Search database"
              bg="none"
              icon={<SearchIcon />}
            />
          </Hide>
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
