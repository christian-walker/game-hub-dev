import { Card, CardBody, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";

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
        </CardBody>
    </Card>
    </>
  )
}

export default GameCard