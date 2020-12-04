import React from 'react'
import List from './List'


function ShoppingCart(props) {

    return (
        <div className="shoppingcart" >
            <h1>Winkelmandje</h1>
            <ul>
                <List list={props.container} />
            </ul>
        </div>
    )
}

export default ShoppingCart