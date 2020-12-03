import React from 'react'
// import List from './List'
// import Container from '../Container'


function GroceryList(props) {
    const allGroceryItems = props.data.groceryItems.map(item => item.title)
    return (
        <div>
            <h1>Boodschappenlijstje</h1>
            <ul>
                <li>{allGroceryItems}</li>
            </ul>
        </div>
    )
}


export default GroceryList