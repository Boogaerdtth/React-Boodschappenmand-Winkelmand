import React from 'react'
import ListItem from './ListItem'

function ShoppingCart(props) {
    const allShoppingListItems = props.state.shoppingListItems.map(item => <ListItem key={item.id} title={item.title} />)
    return (
        <div className="shoppingcart" >
            <h1>Winkelmandje</h1>
            <button onClick={props.emptyCart}> LEEG MAND </button>
            {allShoppingListItems}
        </div>
    )
}

export default ShoppingCart