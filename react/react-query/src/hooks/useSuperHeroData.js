import { useQuery, useQueryClient, } from "@tanstack/react-query";
import axios from "axios"



const fetchSuperHeroes = ({ queryKey }) => {
    console.info(queryKey);
    const heroId = queryKey[1];
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

export const useSuperHeroData = (heroId) => {

    const queryClient = useQueryClient();

    return useQuery({
        queryKey: ['super-hero', heroId],
        queryFn: fetchSuperHeroes,
        initialData: () => {
            const superHeroes = queryClient.getQueryData(['super-heroes'])

            if (superHeroes) {
                const hero = superHeroes.data?.find(superHero => superHero.id == heroId)
                console.log(hero);
                return { data: hero }
            } else {
                return undefined;
            }

        }
    })
}
// export const useSuperHeroData = (heroId) => {
//     return useQuery({
//         queryKey: ['super-hero', heroId],
//         queryFn: () => fetchSuperHeroes(heroId)
//     })
// }