import { HStack, Image, Input, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp'

const NavBar = () => {
  return (
    <HStack>
        <Image
          boxSize='60px'
          src={logo}
          alt='React Logo' />
        <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar