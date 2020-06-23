import React from "react"
import List from './List'

class App extends React.Component{

  constructor(){
    super()
    this.state= {
      items: [],  
      currentTodo: {
        text : '',
        key : ''
      }

    }
    //bind defined functions to the context of the App component, otherwise error will be of undefined
    this.handleChange=this.handleChange.bind(this);
    this.addItem=this.addItem.bind(this);
    this.deleteItem=this.deleteItem.bind(this);
    this.setUpdate= this.setUpdate.bind(this);
  }
  //hanlde manipulation of text on the input field since it will keep changing
  handleChange(e){
    this.setState({
      currentTodo:{
        text : e.target.value,
        key: Date.now()
      }
    })
  }
  //allow user to add new items to the list
  addItem(e){
    e.preventDefault();
    const newTodo = this.state.currentTodo;
    if (newTodo.text !==" "){
      const updatedItems = [...this.state.items, newTodo];
      this.setState({
        items: updatedItems,
        currentTodo : {
          text : '',
          key: ''
        }
      })
    }
  }
  //allow user to delete items
  deleteItem(key){
    const filteredItems = this.state.items.filter(item => 
      item.key  !== key);
        this.setState({
          items: filteredItems

      })
  }
  //function to handle editing items on list
  setUpdate(text,key){
    const items=this.state.items
    //loop through 
    items.map(item =>{
      if(item.key=== key){
        item.text=text;
      }
    })
      this.setState({
        items:items
         })

  }


  render(){


    return(<div>
      <p>My Fancy ToDo list </p>
      <form onSubmit={this.addItem}>
      <input 
            type="text"
            value={this.state.currentTodo.text}
            onChange= {this.handleChange}
            placeholder = "Add item to the list"
      />
      <br></br>
      <br></br>
      <button tye="submit">Add to the list</button>
      </form>

      <div>
        <List 
            items={this.state.items}  
            deleteItem= {this.deleteItem}
            setUpdate={this.setUpdate}
            />
      </div>
    </div>)
  }
}


export default App;