// import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
// import axios from "axios"
// import React from "react"

import { useInfiniteQuery } from "@tanstack/react-query"
import axios from "axios"
import React, { useState } from "react"

// const fetchColors = ({ pageParam = 1 }) => {
//     return axios.get(`http://localhost:4000/colors?_page=${pageParam}&_per_page=2`)
// }

// export const InfiniteQueriesPages = () => {

//     const { data, isLoading, isError, error, hasNextPage, fetchNextPage, isFetching, isFetchingNextPage } = useInfiniteQuery({
//         queryKey: ['colors'],
//         queryFn: fetchColors,
//         initialPageParam: 1,
//         getNextPageParam: (_lastPage, pages) => {
//             if (pages.length < 3) {
//                 return pages.length + 1
//             } else {
//                 return undefined
//             }
//         }
//     })

//     if (isLoading) {
//         return <h2>Loading...</h2>
//     }

//     if (isError) {
//         return <h2>{error.message}</h2>
//     }

//     return (
//         <>

//             {
//                 data?.pages.map((group, i) => (
//                     <React.Fragment key={i}>
//                         {

//                             group.data.data.map(color => <div key={color.id}>{color.label}</div>)
//                         }
//                     </React.Fragment>
//                 ))
//             }

//             <button disabled={!hasNextPage} onClick={fetchNextPage}>Load More!</button>

//             <div>{isFetchingNextPage ? 'Loading...' : null}</div>
//         </>
//     )


// }


const fetchColor = ({pageParam = 1}) => {
    return axios.get(`http://localhost:4000/colors?_page=${pageParam}&_per_page=2`)
}

export function InfiniteQueriesPages() {
    const { data, isLoading, isError, error, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery({
        queryKey: ['colors'],
        queryFn: fetchColor,
        initialPageParam: 1,
        getNextPageParam: (_lastPage, pages) => {
            if (pages.length < 3) {
                return pages.length + 1
            } else {
                return undefined
            }
        }
    })

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }

    return (
        <div>
            {
                data?.pages.map((group, i) => (
                    <React.Fragment key={i}>
                        {
                            group.data.data.map(color => (
                                <div key={color.id}>
                                    {color.label}
                                </div>
                            ))
                        }
                    </React.Fragment>
                ))
            }

            <button disabled={!hasNextPage} onClick={fetchNextPage}>Load more</button>

            {
                isFetchingNextPage && <h2>Loading more...</h2>
            }
        </div>
    )
}