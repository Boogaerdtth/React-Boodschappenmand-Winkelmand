import React from 'react'
import List from './List'


function ShoppingCart(props) {
    // const allShoppingListItems = props.container.shoppingListItems.map(item => item.title)
    return (
        <div>
            <h1>Winkelmandje</h1>
            <ul>
                <List grocerylist={props.container} />
            </ul>

        </div>
    )
}

export default ShoppingCart