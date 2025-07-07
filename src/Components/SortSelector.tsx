import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
    sortSelected: string | null;
    setSortSelected: (value: string) => void;
}

const SortSelector = ({sortSelected, setSortSelected}: Props) => {
    const sortOptions = [
        { value: '', label: 'Relevance' },
        { value: '-added', label: 'Date Added' },
        { value: 'name', label: 'Name' },
        { value: '-released', label: 'Release Date' },
        { value: '-metacritic', label: 'Popularity' },
        { value: '-rating', label: 'Average Rating' },
    ];

    const currentSortOrder = sortSelected ? sortOptions.find(option => option.value === sortSelected) : null;

  return (
    <>
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
               {currentSortOrder ? 'Order by: '+ currentSortOrder.label : "Order by: Relevance"}
            </MenuButton>
            <MenuList>
                {sortOptions.map(option => (
                    <MenuItem key={option.value} onClick={() => setSortSelected(option.value)}>
                        {option.label}
                    </MenuItem>
                ))}
            </MenuList>
    
        </Menu>
    </>
  )
}

export default SortSelector