import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchSuperHeroes = () => axios.get('http://localhost:4000/superheroes')
const fetchFriends = () => axios.get('http://localhost:4000/friends')

export const ParallerQueriesPage = () => {
    const { data: superHeroes, isLoading: isHeroesLoading } = useQuery({
        queryKey: ['super-heroes'],
        queryFn: fetchSuperHeroes
    })

    const { data: friends, isLoading: isFriendsLoading } = useQuery({
        queryKey: ['friends'],
        queryFn: fetchFriends,
    })

    if (isHeroesLoading || isFriendsLoading) {
        return <h2>Loading...</h2>
    }

    return (
        <div style={{ padding: '20px' }}>
            <h2>Parallel Queries Page</h2>

            <h3>Super Heroes:</h3>
            {superHeroes?.data.map((hero) => (
                <div key={hero.id}>{hero.name}</div>
            ))}

            <h3 style={{ marginTop: '20px' }}>Friends:</h3>
            {friends?.data.map((friend) => (
                <div key={friend.id}>{friend.name}</div>
            ))}
        </div>
    )
}
