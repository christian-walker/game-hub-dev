import { Heading, HStack, VStack, Text, Image, Skeleton, SkeletonText, Button } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';


interface Props {
  setSelectGenre: (genre: Genre) => void;
}
const GenreList = ({setSelectGenre} : Props) => {
    const {data, loading, error} = useGenres();
    const skeletonCount = [1,2,3,4,5,6,7,8,9, 10]; // Number of skeletons to show when loading

    if(error) return null
    
  return (
    <>
        <Heading fontSize="2xl" marginBottom={2}>Genres</Heading>
        <VStack justifyContent="start" alignItems="start">
        {loading && 
            
              skeletonCount.map((skeleton) => (
                <HStack key={skeleton}>
                  <Skeleton height="32px" width="32px" borderRadius={8} marginRight={2}/>
                  <SkeletonText />
                </HStack>
              ) )
        }
                        {
                data.map((genre) => (
                  <HStack key={genre.id}>
                  <Image src={getCroppedImageUrl(genre.image_background)} boxSize="32px" borderRadius={8} objectFit="cover" marginRight={2} />
                  <Button variant="text" onClick={() => setSelectGenre(genre) } fontSize="lg">{genre.name}</Button>
              </HStack>
                ))
            }
        </VStack>
    </>
  )
}

export default GenreList;