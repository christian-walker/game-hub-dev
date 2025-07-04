import { useEffect, useState } from 'react'
import apiClient, { CanceledError } from '../services/api-client';
import { Axios, AxiosRequestConfig } from 'axios';

export interface FetchResponse<T>{
    count: number;
    results: T[];
    // Add other game properties as needed
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    useEffect(() => {
        setLoading(true);
        const controller = new AbortController();
        apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then(res => {
            setData(res.data.results);
            setLoading(false);
        })
        .catch(err => { 
            if(err instanceof CanceledError) return;
            setError(err.message); 
            setLoading(false);
        });

        return () => controller.abort();

      }, deps ? [...deps] : []);

      return ({ data, loading, error });
}

export default useData;