import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const fetchUserEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCourseByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

export const DependentsQueriesPages = ({ email }) => {
    const { data: user } = useQuery({
        queryKey: ['user', email],
        queryFn: () => fetchUserEmail(email)
    })

    const channelId = user?.data.channelId;
    

    useQuery({
        queryKey: ['courses', channelId],
        queryFn: () => fetchCourseByChannelId(channelId),
        enabled: !!channelId
    })


    return (
        <div>DependentsQueriesPages</div>
    )
}