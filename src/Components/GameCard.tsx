import { Card, CardBody, Heading, Icon, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { icons } from "react-icons";
import PlatformIconList from "./PlatformIconList";

interface Props {
    game: Game
}
const GameCard = ({ game }: Props) => {
  

  return (
    <>
    <Card borderRadius={10} overflow="hidden">
        <Image
            src={game.background_image}
            alt={game.name}
            objectFit="cover"
            width="100%"
            height="200px" />
        <CardBody>
            <Heading as="h2" fontSize="2xl" noOfLines={1}>
                {game.name}
            </Heading>
            <PlatformIconList
                platforms={game.parent_platforms.map(p => p.platform)}
            />
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard