import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

const PlatformFilter = () => {
  const {data, error} = usePlatforms();

  if (error) return null;
  
  return (
    <>
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platforms</MenuButton>
        <MenuList>
        {data.map((platform) => (
            <MenuItem key={platform.id}>
                {platform.name}
            </MenuItem>
        ))}  
        </MenuList>

    </Menu>
    </>
  )
}

export default PlatformFilter