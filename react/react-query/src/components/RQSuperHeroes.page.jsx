import { Link } from "react-router-dom";
import { useHeroesData } from "../hooks/useHeroesData"


export const RQSuperHeroesPage = () => {



  const { isLoading, isError, error, data, isFetching, refetch } = useHeroesData();

  console.info({ isLoading, isFetching })

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }
  console.info(data);
  return (
    <>
      <h2>RQ Super Heroes Page</h2>

      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? 'Fetching...' : 'Fetch heroes'}
      </button>
      {data?.data.map((hero) => {
        return <div key={hero.id}><Link to={`/rq-super-hero/${hero.id}`} >{hero.name}</Link></div>
      })}

      {/* {
        data?.map((hero) => {
          return <div key={hero}>{hero}</div>
        })
      } */}

    </>
  )
}
