import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineOrderedList } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

export default function App() {
  const [todosText, setTodosText] = React.useState("")
  const [todos, setTodos] = React.useState([])

  const handleSubmit = (event) =>{
    event.preventDefault();
    setTodos([...todos, todosText])
  }
  const handleChange = (event) =>{
    setTodosText(event.target.value)
  }
  const handleDelete = index =>{
    setTodos(todos.filter((_, i) => i !== index))
  }
  return (
    <div className='d-flex pt-4 justify-content-center align-items-center w-100 h-100'>
      <div className='todo-list'>
        <div className='d-flex align-items-center gap-2'>
          <h3 className='text-center'>React Todo App</h3>
          <AiOutlineOrderedList size={28}/>
        </div>
      <form onSubmit={handleSubmit}>
        <input required placeholder='Enter something' className='border border-secondary rounded h-100 p-2' onChange={handleChange} type="text"/>
        <button className='btn btn-success p-2'>Submit</button>
        </form>
        <ul className='list-none'>
        { todos.map((item, index) => 
         <li className='bg-light' key={index}><p className='text-left'>{index + 1}) {item}</p><TiDeleteOutline className='deleteIcon' size={28} onClick={() => handleDelete(index)}/></li>
        )}
        </ul>
        </div>
    </div>
  )
}
