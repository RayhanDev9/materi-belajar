import { useQueries, useQuery } from "@tanstack/react-query"
import axios from "axios"




const fetchSuperHeroes = (heroId) => axios.get(`http://localhost:4000/superheroes/${heroId}`)

export const DaynemicParallerPages = ({ herosId }) => {
    const queryResult = useQueries({
        queries: herosId.map(id => {
            return {
                queryKey: ['super-hero', id],
                queryFn: () => fetchSuperHeroes(id)
            }
        })
    }
    )

    console.info(queryResult);


    return (
        <div>ParallerQueriesPage</div>
    )
}