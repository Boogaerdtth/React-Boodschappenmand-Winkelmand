import React from 'react'
import ListItem from './ListItem'

function GroceryList(props) {
    // console.log(props.handleClickGroceryItem)
    // worden de props goed doorgeven hieronder?
    return (
        <div className="grocerylist" >
            <h1>Boodschappenlijstje</h1>
            <form onSubmit={props.handleSubmit}>
                <input
                    type="text"
                    name="inputField"
                    value={props.state.inputField}
                    placeholder="Boodschap!!"
                    onChange={props.handleChange} />
                <button> Voeg toe </button>
            </form>
            <div onClick={props.handleClickGroceryItem}>
                {props.state.groceryItems.map(item =>
                    <ListItem
                        key={item.id}
                        title={item.title}
                    // handleClickGroceryItem={props.handleClickGroceryItem} 
                    />)}
            </div>
        </div>
    )
}

export default GroceryList