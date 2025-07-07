import { HStack, Image, Input, Text } from '@chakra-ui/react';
import logo from '../assets/logo.webp'
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack>
        <Image
          boxSize='60px'
          src={logo}
          alt='React Logo' />
        <SearchInput onSearch={onSearch}/>
        <ColorModeSwitch></ColorModeSwitch>
        
    </HStack>
  )
}

export default NavBar