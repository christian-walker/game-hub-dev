import { Genre } from '../hooks/useGenres';
import { HStack, Image, Text } from '@chakra-ui/react';

interface props {
    genre: Genre
}
const GenreCard = ({genre}: props) => {
  return (
    <HStack key={genre.id} >
        <Image src={genre.image_background} boxSize="32px" borderRadius={8} objectFit="cover" marginRight={2} />
        <Text>{genre.name}</Text>
    </HStack>
  )
}

export default GenreCard