import { Heading, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';


const GameGrid = () => {
    const {games, loading, error} = useGames();
  
    return (
        <>
            <Heading as="h1">Games</Heading>
            {loading && <Text>...loading</Text>}
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing={6}>
                {games.map((game) => (
                    <Text key={game.id}>{game.name}</Text>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid