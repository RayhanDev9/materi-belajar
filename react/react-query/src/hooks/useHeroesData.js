import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

// 1. Fetcher untuk mengambil data
const fetchSuperHeroes = () => {
    return axios.get('http://localhost:4000/superheroes')
}

// 2. Fetcher untuk menambahkan data (POST)
const addHero = (hero) => {
    return axios.post('http://localhost:4000/superheroes', hero)
}

// Custom Query Hook (GET)
export const useHeroesData = () => {
    return useQuery({
        queryKey: ['super-heroes'],
        queryFn: fetchSuperHeroes,
        // gcTime: 5000,
        // staleTime: 30000,
        // refetchOnMount: true,
        // refetchOnWindowFocus : true,
        // refetchInterval: 2000,
        // refetchIntervalInBackground: true,
        // enabled: false,
        // onSuccess,
        // onError,
        // select: (data) => {
        //     return data.data.map(hero => hero.name);
        // }
    })
}

// Custom Mutation Hook (POST)
export const useAddHeroData = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addHero,
        onSuccess: (data) => {
            console.log('Hook Level onSuccess - Hero berhasil ditambahkan:', data)
            // Otomatis refresh data query heroes setelah berhasil menambah hero
            queryClient.invalidateQueries({ queryKey: ['super-heroes'] })
        },
        onError: (error) => {
            console.error('Hook Level onError - Gagal menambahkan hero:', error.message)
        }
    })
}


