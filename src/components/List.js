import React from 'react'
import ListItem from './ListItem'

function List(props) {
    const allGroceryItems = props.list.groceryItems.map(item => <ListItem key={item.id} title={item.title} />)
    const allShoppingListItems = props.list.shoppingListItems.map(item => <ListItem key={item.id} title={item.title} />)
    return (
        <div>
            {allGroceryItems}
            {allShoppingListItems}
        </div>
    )
}
export default List