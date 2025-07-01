import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react'
import useGenres from '../hooks/useGenres';
import GenreCard from './GenreCard';

const GenreList = () => {
    const {genres, loading, error} = useGenres();
  return (
    <VStack justifyContent="start" alignItems="start" padding={5}>
        <Heading fontSize="2xl" marginBottom={2}>Genres</Heading>
        {
            genres.map((genre) => (
                <GenreCard key={genre.id} genre={genre} />
            ))
        }
    </VStack>
  )
}

export default GenreList;