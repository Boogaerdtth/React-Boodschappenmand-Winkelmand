import React from 'react'
import List from './List'
// import Container from '../Container'
// import ListItem from './ListItem'


function GroceryList(props) {
    console.log(props.container.groceryItems)
    // const allGroceryItems = props.container.groceryItems.map(item => item.title)
    return (
        <div>
            <h1>Boodschappenlijstje</h1>
            <List grocerylist={props.container} />
        </div>
    )
}


export default GroceryList