import React from 'react'

function ListItem(props) {
    console.log(props.list)
    // const allGroceryItems = props.list.map(item => item = item.title)
    // {props.grocerylist.groceryItems.title}
    return (
        <div>
            <li
            // key={item.id}
            // className='list-item'
            // onClick={clickItem}
            // value={item.title}
            // >{props.data.title}
            >
                Aardappels</li>
            {/* {props.list} */}
            {/* {allGroceryItems} */}
        </div>
    )
}
console.log('hallo')
export default ListItem