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
                { id: 5, title: "Brood" }
            ],
            shoppingListItems: [
                { id: 1, title: "Bananen" },
                { id: 2, title: "Aardappels" }
            ]
        }
        // this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleClickGroceryItem(event) {
    //     this.setState(() => {
    //         return {inputField: }
    //     })
    // }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        this.setState({
            inputField: event.target.value
        })
    }
    render() {

        return (
            <div className="container">
                <GroceryList
                    container={this.state}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit} />
                <ShoppingCart container={this.state} />

            </div>
        )
    }
}

export default Container