import { keepPreviousData, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'



const fetchColors = (pageNumber) => {
    return axios.get(`http://localhost:4000/colors?_page=${pageNumber}&_per_page=2`)
}

export const PaginateQueriesPages = () => {

    const [pageNumber, setPageNumber] = useState(1);

    const { data, isLoading, isError, error, isFetching } = useQuery({
        queryKey: ['colors', pageNumber],
        queryFn: () => fetchColors(pageNumber),
        placeholderData : keepPreviousData,
    })

    if (isLoading) {
        return <h2>Loading....</h2>
    }

    if (isError) {
        return <h2>{error.message}</h2>
    }



    return (
        <div>

            {
                data?.data.data.map(color => {
                    return <div key={color.id}>{color.label}</div>
                })
            }
            <button disabled={pageNumber === 1} onClick={() => setPageNumber(pageNumber - 1)}>
                Previous
            </button>

            <button disabled={!data?.data.next} onClick={() => setPageNumber(pageNumber + 1)}>
                Next
            </button>

            {
                isFetching && <h2>Loading....</h2>
            }
        </div>

    )
}