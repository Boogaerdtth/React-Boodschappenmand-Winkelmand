import React from 'react'

function ListItem(props) {
    return (
        <div className="item" >
            <h3 onClick={props.handleClick} >{props.title}</h3>
        </div>
    )
}
export default ListItem