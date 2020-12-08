import React from 'react'

function ListItem(props) {
    // console.log(props)

    return (
        <div className="item" >
            {/* <li>
                <span> {props.title}</span>
                <span> {props.amount} </span>
            </li> */}
            {<h3 >{props.title} {props.amount}</h3>}
        </div>
    )
}
export default ListItem