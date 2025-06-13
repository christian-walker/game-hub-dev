import React, { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Heading, SimpleGrid, Text } from '@chakra-ui/react';

interface FetchGamesResponse{
    count: number;
    results: Game[];
    // Add other game properties as needed
}

interface Game{
    id: number;
    name: string;
    // Add other game properties as needed
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    apiClient.get<FetchGamesResponse>('/games')
    .then(res => {
        console.log(res.data.count);
        console.log(res.data.results);
        setGames(res.data.results);
    })
    .catch(err => { setError(err.message); })
    setLoading(false);
  }, []);

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