import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
function Product() {
    return (
        <>

            <div>Product</div>

            <input type="text" placeholder='Serch product' />
            <nav>
                <Link to={"featured"}>Featured</Link>
                <Link to={"new"}>New </Link>
            </nav>

        <Outlet />
        </>

    )
}

export default Product