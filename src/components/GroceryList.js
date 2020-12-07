import React from 'react'
// import List from './List'
// import ListItem from './ListItem'

function GroceryList(props) {
    // const allGroceryItems = props.container.groceryItems.map(item => <ListItem key={item.id} title={item.title} />)

    // const item = { id: props.container.groceryItems.length + 1, title: props.container.inputField };
    // let addGrocery = allGroceryItems.pop(grocery => grocery(item))

    // props.handleSubmit = (event) => {
    //     this.setState({
    //         inputField: props.container.inputField,
    //     })
    // }
    // const buttonHandler = (e) => {
    //     e.preventDefault()
    // props.setState({
    //     ...allGroceryItems, title: props.container.inputField, id: props.container.groceryItems.length + 1
    // })
    console.log(props)
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
            {props.allGroceryItems}

        </div>
    )
}
// ik moet mn input toe kunne voegen aan een nieuwe LI

export default GroceryList