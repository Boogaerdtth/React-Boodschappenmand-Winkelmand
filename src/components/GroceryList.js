import React from 'react'
import List from './List'

function GroceryList(props) {
    return (
        <div className="grocerylist" >
            <h1>Boodschappenlijstje</h1>
            <List list={props.container} />
        </div>
    )
}



export default GroceryList