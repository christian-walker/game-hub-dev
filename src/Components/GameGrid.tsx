import { Heading, SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';

const GameGrid = () => {
    const {games, loading, error} = useGames();
    const skeletonCount = [1,2,3,4,5,6]; // Number of skeletons to show when loading
  
    return (
        <>
            <Heading as="h1">Games</Heading>
            {loading && 
                <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing={6}>
                    {skeletonCount.map((skeleton) => (
                        <GameCardSkeleton key={skeleton} />
                    ))}
                </SimpleGrid> 
            }
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing={6}>
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid