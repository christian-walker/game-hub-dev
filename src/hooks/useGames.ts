import useData from './useData';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';
import { GameQuery } from '../App';

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms:  { platform: Platform }[];
    metacritic: number;
    // Add other game properties as needed
}

const useGames = (gameQuery: GameQuery) => useData<Game>('/games', { 
    params: { 
        genres: gameQuery.genre?.id, 
        platforms: gameQuery.platform?.id, 
        ordering: gameQuery.sortOrder
    }}, [gameQuery]);

export default useGames