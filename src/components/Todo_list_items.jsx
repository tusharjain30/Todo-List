import React from 'react';
import './Todo_list_items.css';

let Todo_list_items = (props) => {
    return (
        <>
            <div className = "todo_items">
                <li>
                    <i className="fa-sharp fa-solid fa-circle-xmark" onClick = {() => { props.delete_handler(props.id) }}></i>
                     {props.items} 
                </li>
            </div>
        </>
    )
}

export default Todo_list_items;