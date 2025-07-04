import { Heading, SimpleGrid, Text } from '@chakra-ui/react';
import useGames, { Game } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useData from '../hooks/useData';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';


interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}
const GameGrid = ({selectedGenre, selectedPlatform} : Props) => {
    const {data, loading, error} = useGames(selectedGenre, selectedPlatform);
    const skeletonCount = [1,2,3,4,5,6]; // Number of skeletons to show when loading
  
    return (
        <>
            <Heading as="h1">Games</Heading>
            {loading && 
                <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing={6}>
                    {skeletonCount.map((skeleton) => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                </SimpleGrid> 
            }
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md:2, lg:3}} spacing={6}>
                {data.map((game) => (
                    <GameCardContainer key={game.id}>
                        <GameCard game={game} />
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
}

export default GameGrid