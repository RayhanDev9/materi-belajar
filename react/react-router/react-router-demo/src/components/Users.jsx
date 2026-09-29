import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
    const [searchParams, setSearchParams] = useSearchParams();

    const showActiveUser = searchParams.get("filter") === "active";

    return (
        <>
            <div>Users List</div>
            <ul>
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
            </ul>
            <Outlet />

            <div>
                <button onClick={() => setSearchParams({ filter: "active" })}>Active User</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button></div>

            <div>
                {
                    showActiveUser ? <h2>Active User</h2> : <h2>Non Active User</h2>
                }
            </div>
        </> 
    )
}

export default Users    