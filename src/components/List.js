import React from 'react'
import ListItem from './ListItem'

function List(props) {
    const allGroceryItems = props.grocerylist.groceryItems.map(item => <ListItem key={item.id} title={item.title} />)
    return (
        <div>
            <ul>
                {allGroceryItems}
                bier

            </ul>
        </div>
    )
}
export default List