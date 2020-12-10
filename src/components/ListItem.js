import React from 'react'

function ListItem(props) {
    // console.log(props.title)
    return (
        <div className="item" onClick={props.handleClickGroceryItem}>
            <h3>{props.title}</h3>
        </div>
    )
}
export default ListItem

/* <h3>
                <span> {props.title}</span>
                <span> {props.amount} </span>
            </h3> */
            // <h3 >
            //     {props.title}
            //     {/* {props.amount}  */}
            // </h3>