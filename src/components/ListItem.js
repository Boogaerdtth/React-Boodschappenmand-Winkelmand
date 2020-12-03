import React from 'react'

function ListItem(props) {
    const allGroceryItems = props.list.map(item => item = item.title)
    return (
        <div>
            {allGroceryItems}
        </div>
    )
}
export default ListItem