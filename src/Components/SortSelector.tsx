import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevance
            </MenuButton>
            <MenuList>
                <MenuItem>Relevance</MenuItem>
                <MenuItem>Date Added</MenuItem>
                <MenuItem>Popularity</MenuItem>
                <MenuItem>Average Rating</MenuItem>
                <MenuItem>Release Date</MenuItem>  
            </MenuList>
    
        </Menu>
    </>
  )
}

export default SortSelector