import React from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'
// key={props.item.id} ,item={props.item}

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            groceryItems: [
                { id: 1, title: "Appels" },
                { id: 2, title: "Pak melk" },
                { id: 3, title: "Bier" },
                { id: 4, title: "Chips" },
                { id: 5, title: "Brood" }
            ],
            shoppingListItems: [
                { id: 1, title: "Bananen" }
            ]
        }
    }
    render() {
        return (
            <div className="container">
                <GroceryList container={this.state} />
                <ShoppingCart container={this.state} />

            </div>
        )
    }
}

export default Container