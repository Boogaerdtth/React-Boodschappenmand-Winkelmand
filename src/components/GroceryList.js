import React from 'react'
// import List from './List'
import ListItem from './ListItem'

function GroceryList(props) {
    // console.log(props.handleSubmit)
    const allGroceryItems = props.container.groceryItems.map(item => <ListItem key={item.id} title={item.title} />)
    return (
        <div className="grocerylist" >
            <h1>Boodschappenlijstje</h1>
            <form /*onSubmit={props.handleSubmit}*/>
                <input
                    type="text"
                    name="inputField"
                    value={props.container.inputField}
                    placeholder="Boodschap!!"
                    onChange={props.handleChange} />

                <button> Voeg toe </button>
            </form>
            <h1 >{props.container.inputField}</h1>
            {allGroceryItems}
        </div>
    )
}


export default GroceryList