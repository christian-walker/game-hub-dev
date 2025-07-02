import { Heading, VStack } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import GenreCard from './GenreCard';

const GenreList = () => {
    const {data} = useGenres();
  return (
    <VStack justifyContent="start" alignItems="start" padding={5}>
        <Heading fontSize="2xl" marginBottom={2}>Genres</Heading>
        {
            data.map((genre) => (
                <GenreCard key={genre.id} genre={genre} />
            ))
        }
    </VStack>
  )
}

export default GenreList;