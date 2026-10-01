import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { request } from '../utils/axios-util'

// 1. Fetcher untuk mengambil data
const fetchSuperHeroes = () => {
    // return axios.get('http://localhost:4000/superheroes')

    return request({ url: '/superheroes' })
}

// 2. Fetcher untuk menambahkan data (POST)
const addHero = (hero) => {
    // return axios.post('http://localhost:4000/superheroes', hero)

    return request({ url: '/superheroes', method: 'post', data: hero })
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

// Custom Mutation Hook (POST) dengan Optimistic Updates
export const useAddHeroData = () => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: addHero,
        // onSuccess: (data) => {
        //     console.log('Hook Level onSuccess - Hero berhasil ditambahkan:', data)
        //     // Otomatis refresh data query heroes setelah berhasil menambah hero
        //     // queryClient.invalidateQueries({ queryKey: ['super-heroes'] })

        //     // queryClient.setQueriesData(['super-heroes'], (oldQueryData) => {
        //     //     return {
        //     //         ...oldQueryData, data: [...oldQueryData.data, data.data] 
        //     //     }
        //     // })
        // },
        // onError: (error, _hero, context) => {
        //     console.error('Hook Level onError - Gagal menambahkan hero:', error.message)
        //     console.log('Context:', context)
        // },

        // --- OPTIMISTIC UPDATES ---
        // 1. Dipanggil SEBELUM mutationFn dijalankan (update UI secara optimis)
        onMutate: async (newHero) => {
            // Batalkan refetch yang sedang berjalan agar tidak menimpa update optimis kita
            await queryClient.cancelQueries({ queryKey: ['super-heroes'] })



            // Simpan snapshot data cache lama (untuk rollback jika nanti error)
            const previousHeroData = queryClient.getQueryData(['super-heroes'])

            // Update cache secara langsung dengan data baru sementara
            queryClient.setQueryData(['super-heroes'], (oldQueryData) => {
                if (!oldQueryData) return oldQueryData
                return {
                    ...oldQueryData,
                    data: [
                        ...oldQueryData.data,
                        { id: oldQueryData?.data?.length + 1, ...newHero }
                    ]
                }
            })

            // Kembalikan context berisi data lama untuk rollback
            return { previousHeroData }
        },
        // 2. Jika mutation GAGAL, kembalikan data cache ke snapshot sebelum mutasi
        onError: (_error, _hero, context) => {
            if (context?.previousHeroData) {
                queryClient.setQueryData(['super-heroes'], context.previousHeroData)
            }
        },
        // 3. Dipanggil SETELAH mutation selesai (baik sukses maupun gagal)
        // Lakukan invalidateQueries untuk memastikan data di client 100% sinkron dengan server
        onSettled: () => {
            queryClient.invalidateQueries({ queryKey: ['super-heroes'] })
        }
    })
}


