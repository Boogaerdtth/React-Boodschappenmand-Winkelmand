import React from 'react'
import ListItem from './ListItem'

function GroceryList(props) {
    return (
        <div className="grocerylist" >
            <h1>Boodschappenlijstje</h1>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name="inputField"
                    value={props.container.inputField}
                    placeholder="Boodschap!!"
                    onChange={props.handleChange} />

                <button> Voeg toe </button>
            </form>
            {props.container.groceryItems.map(item => <ListItem key={item.id} title={item.title} />)}
        </div>
    )
}

export default GroceryList