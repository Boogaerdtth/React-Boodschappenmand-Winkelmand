import React from 'react'
import ListItem from './ListItem'
// import Container from '../Container'

function List(props) {
    // console.log(props.grocerylist.groceryItems)

    // return (
    //     <div>
    //         <ul {...this.state}>
    //             {allGroceryItems}
    //         </ul>
    //     </div>
    // )
    return (
        <div>
            <ul>
                <li><ListItem list={props.grocerylist.groceryItems} /></li>
                <li><ListItem /></li>
                <li><ListItem /></li>
                <li><ListItem /></li>
                <li><ListItem /></li>
            </ul>
        </div>
    )
}
// console.log(props.grocerylist.groceryItems.title)

export default List