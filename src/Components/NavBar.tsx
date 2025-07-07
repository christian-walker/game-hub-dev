import { HStack, Image, Input, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

const NavBar = () => {
  return (
    <HStack>
        <Image
          boxSize='60px'
          src={logo}
          alt='React Logo' />
        <SearchInput />
        <ColorModeSwitch></ColorModeSwitch>
        
    </HStack>
  )
}

export default NavBar