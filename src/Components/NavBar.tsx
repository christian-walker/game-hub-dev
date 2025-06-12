import { HStack, Image, Input, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
        <Image
          boxSize='60px'
          src={logo}
          alt='React Logo' />
        <Text>NavBar</Text>
        <ColorModeSwitch></ColorModeSwitch>
        
    </HStack>
  )
}

export default NavBar