import React, {useState, useEffect} from 'react';
import './App.css';
import Todo_list_items from './components/Todo_list_items.jsx';

// to get the data from Local Storage
let getLocalItems = () => {
  let list = localStorage.getItem('lists');

  if (list) {
    return JSON.parse(localStorage.getItem('lists'));
  }
  else{
    return [];
  }
}

let App = () => {

  const [value, setValue] = useState("");
  const [items, setItems] = useState(getLocalItems());

  let input_handler = (event) => {
    setValue(event.target.value);
  }

  let click_handler = () => {
    setItems((item) => {
        return [...item, value];
    })
    setValue('');
  }

  let items_delete = (id) => {
    setItems((data) => {
      return data.filter((arr, index) => {
          return index !== id;
      })
    })
  }

  useEffect(() => {
    localStorage.setItem('lists', JSON.stringify(items));
  }, [items])

  return (
    <>
      <div className='main_div'>
        <div className='todo_list'>
            <h1 className='todo_heading'>ToDo List</h1>
            <div className='todo_list_items'>
              <input type = "text" className='input_text' placeholder='Add Items' onChange={input_handler} value = {value} />
              <button className='add_btn' onClick={click_handler}> + </button>

              <ol>
                  {
                    items.map((itemVal, index) => {
                        return <Todo_list_items items = {itemVal} key = {index} id = {index} delete_handler = {items_delete}/>
                    })
                  }
              </ol>
            </div>
        </div>
      </div>
    </>
  )
}

export default App;