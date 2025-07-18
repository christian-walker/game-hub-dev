import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Platform } from "../hooks/usePlatforms";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";

interface Props {
    setSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformFilter = ({setSelectPlatform, selectedPlatform} : Props) => {
  const {data, error} = usePlatforms();

  if (error) return null;

  return (
    <>
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />}>{
            selectedPlatform ? selectedPlatform.name : 'Platforms'
        }</MenuButton>
        <MenuList>
        {data.map((platform) => (
            <MenuItem key={platform.id} onClick={()=> setSelectPlatform(platform)}>
                {platform.name}
            </MenuItem>
        ))}  
        </MenuList>

    </Menu>
    </>
  )
}

export default PlatformFilter