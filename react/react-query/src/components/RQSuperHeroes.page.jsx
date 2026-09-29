import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  const { isLoading, isError, error, data, isFetching, refetch } = useQuery({
    queryKey: ['super-heroes'],
    queryFn: fetchSuperHeroes,
    // gcTime: 5000,
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus : true,
    // refetchInterval: 2000,
    // refetchIntervalInBackground: true,
    enabled: false,
  })

  console.info({ isLoading, isFetching })

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
      <h2>RQ Super Heroes Page</h2>

      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Fetching...' : 'Fetch heroes'}
      </button>
      {data?.data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>
      })}

    </>
  )
}
