import React from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputField: "",

            groceryItems: [
                { id: 1, title: "Appels" },
                { id: 2, title: "Pak melk" },
                { id: 3, title: "Bier" },
                { id: 4, title: "Chips" },
            ],
            shoppingListItems: [
                { id: 1, title: "Bananen" },
                { id: 2, title: "Aardappels" }
            ]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    emptyCart = () => {
        this.setState({ shoppingListItems: [] });
    };
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    //     this.setState({
    //         AllGroceryItems: this.state.groceryItems.concat(item)
    //     }, { inputField: " " })
    //     console.log(event.target.value)
    // }

    handleSubmit = event => {
        const item = { id: this.state.groceryItems.length + 1, title: 'abc' };
        event.preventDefault()
        this.setState({ groceryItems: this.state.groceryItems.concat(item) })
        this.setState({ inputField: " " })
        console.log(this.state.groceryItems)

    }

    render() {
        return (
            <div className="container">
                <GroceryList
                    container={this.state}
                    setState={this.setState}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                />
                <ShoppingCart
                    container={this.state}
                    emptyCart={this.emptyCart}
                />
            </div>
        )
    }
}


export default Container