import React from 'react'
import ListItem from './ListItem'
// import Container from '../Container'

function List(props) {
    return (
        <div>
            <ul>
                <ListItem list={props.grocerylist.groceryItems} />

            </ul>
        </div>
    )
}
export default List