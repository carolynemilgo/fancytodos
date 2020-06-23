import React from 'react'

function List(props){

    const items= props.items;
    const listItems = items.map(item => {
        return<div key={item.key}>
                <p>
                <span>
                <input 
                // Added input tag to easily make changes to the text
                id={item.key}
                onChange={(event) =>{
                    props.setUpdate(event.target.value, item.key)
                }}
                value={item.text} 
                /> 
                {/* place button alongside the item to easily identify which one to delete */}
                <button onClick={() => props.deleteItem(item.key)}>Delete</button>
                 </span>
                 </p>
                 

        </div>
    })  

    return(<div>
        <p>{listItems}</p>
        

    </div>)

}




export default List;