import { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client';

interface FetchGamesResponse{
    count: number;
    results: Game[];
    // Add other game properties as needed
}

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms:  { platform: Platform }[];
    // Add other game properties as needed
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        apiClient
        .get<FetchGamesResponse>('/games', {signal: controller.signal})
        .then(res => {setGames(res.data.results);})
        .catch(err => { 
            if(err instanceof CanceledError) return;
            setError(err.message); });

        setLoading(false);

        return () => controller.abort();

      }, []);

      return ({ games, loading, error });
}

export default useGames