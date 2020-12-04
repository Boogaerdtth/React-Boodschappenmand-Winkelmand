import React from 'react'
import List from './List'
import ListItem from './ListItem'

function ShoppingCart(props) {
    const allShoppingListItems = props.container.shoppingListItems.map(item => <ListItem key={item.id} title={item.title} />)
    return (
        <div className="shoppingcart" >
            <h1>Winkelmandje</h1>
            <input type="text" placeholder="Voeg je boodschap toe" />
            <button> MAND </button>
            {allShoppingListItems}
        </div>
    )
}

export default ShoppingCart