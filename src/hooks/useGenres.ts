import { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client';

interface FetchGenresResponse{
    count: number;
    results: Genre[];
    // Add other genre properties as needed
}

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient.get<FetchGenresResponse>('/genres')
    .then(res => {
        setGenres(res.data.results);
        setLoading(false);
    })
    .catch(err => { 
        if(err instanceof CanceledError) return;
        setError(err.message); 
        setLoading(false);
    });

    return () => controller.abort();

    }, []);

    
  
  return ({genres, loading, error});
}

export default useGenres;