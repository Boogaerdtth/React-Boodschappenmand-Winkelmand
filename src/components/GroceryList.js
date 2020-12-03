import React from 'react'
import List from './List'

function GroceryList(props) {
    return (
        <div>
            <h1>Boodschappenlijstje</h1>
            <List grocerylist={props.container} />
        </div>
    )
}


export default GroceryList