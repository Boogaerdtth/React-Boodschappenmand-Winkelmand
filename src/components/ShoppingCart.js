import React from 'react'
// import Container from '../Container'


function ShoppingCart(props) {
    const allShoppingListItems = props.container.shoppingListItems.map(item => item.title)
    return (
        <div>
            <h1>Winkelmandje</h1>
            <ul>
                <li>{allShoppingListItems}</li>
            </ul>

        </div>
    )
}

export default ShoppingCart