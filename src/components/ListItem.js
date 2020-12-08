import React from 'react'

function ListItem(props) {
    return (
        <div className="item" >
            {/* <h3>
                <span> {props.title}</span>
                <span> {props.amount} </span>
            </h3> */}
            {<h3 >
                {props.title}
                {/* {props.amount}  */}
            </h3>}
        </div>
    )
}
export default ListItem