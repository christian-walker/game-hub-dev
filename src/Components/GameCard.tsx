import { Card, CardBody, Heading, HStack, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { icons } from "react-icons";
import PlatformIconList from "./PlatformIconList";
import MetaCritic from "./MetaCritic";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props {
    game: Game
}
const GameCard = ({ game }: Props) => {
  

  return (
    <>
    <Card>
        <Image
            src={getCroppedImageUrl(game.background_image)}
            alt={game.name}
            objectFit="cover"
            width="100%"
            height="200px" />
        <CardBody>
            <HStack justifyContent="space-between" marginBottom={2}>
                <PlatformIconList
                    platforms={game.parent_platforms.map(p => p.platform)}
                />
                <MetaCritic rating={game.metacritic}/>  
            </HStack>
            <Heading as="h2" fontSize="2xl" noOfLines={1}>
                {game.name}<Emoji rating={game.rating_top}/>
            </Heading>
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard