import React from 'react'
import GroceryList from './components/GroceryList'
import ShoppingCart from './components/ShoppingCart'
import ListItem from './components/ListItem'


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
        // console.log(allGroceryItems)

        const item = { id: this.state.groceryItems.length + 1, title: event.target.value };
        event.preventDefault()
        this.setState({
            // inputField: event.target.value
            groceryItems: this.allGroceryItems.push(item)
        })
        this.setState()
        this.setState({ inputField: " " })

    }

    // const addGrocery = grocery => {
    //     const item = { id: this.state.groceryItems.length + 1, title: grocery };
    //     // We gebruiken concat, omdat concat een nieuwe array returned.
    //     // Push methode werkt niet omdat je dan direct de state zou muteren.
    //     this.setState({ groceryItems: this.state.groceryItems.concat(item) });
    //   };

    // dus als ik de const allgroceryitems onder de render zet, dan kan ik hem niet in de 
    // functie aanroepen hierboven. en als ik hem bovenin definieer, dan kan ik m 
    // weer niet renderen
    render() {
        const allGroceryItems = this.state.groceryItems.map(item => <ListItem key={item.id} title={item.title} />)
        return (
            <div className="container">
                <GroceryList
                    container={this.state}
                    setState={this.setState}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    // inputGroceryHandler={this.inputGroceryHandler}
                    allGroceryItems={allGroceryItems} />
                <ShoppingCart
                    container={this.state}
                />

            </div>
        )
    }
}


export default Container