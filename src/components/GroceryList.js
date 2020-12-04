import React from 'react'
import List from './List'
import ListItem from './ListItem'

function GroceryList(props) {
    const allGroceryItems = props.container.groceryItems.map(item => <ListItem key={item.id} title={item.title} />)
    return (
        <div className="grocerylist" >
            <h1>Boodschappenlijstje</h1>
            <input type="text" placeholder="Voeg je boodschap toe" />
            <button> Voeg toe </button>
            {allGroceryItems}
        </div>
    )
}



export default GroceryList