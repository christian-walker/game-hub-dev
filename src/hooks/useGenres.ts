import genres from '../data/genres';

export interface Genre {
    id: number;
    name: string;
    image_background: string;
    slug: string
}

const useGenres = () => ({data: genres, error: null, loading: false});

export default useGenres;