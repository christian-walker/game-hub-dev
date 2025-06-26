import useGames, { Platform } from '../hooks/useGames';
import { Box, Flex, HStack, Icon, List, ListItem, SimpleGrid, Text } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import { FaApple, FaApplePay, FaLinux, FaPlaystation, FaWindows, FaXbox, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from 'react-icons/lib';



interface Props {
    platforms: Platform[]
}
const PlatformIconList = ({ platforms }: Props) => {

  const iconMap: {[key: string]: IconType }= {
    pc: FaWindows,
    mac: FaApple,
    linux: FaLinux,
    playstation: FaPlaystation,
    xbox: FaXbox,
    android: FaAndroid,
    ios: MdPhoneIphone,
    nintendo: SiNintendo,
    web: BsGlobe
  }

  return (
    <>
    <HStack marginY={2}>
    {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={'gray.500'}/>
    ))}

    </HStack>
          </>
  )
}

export default PlatformIconList