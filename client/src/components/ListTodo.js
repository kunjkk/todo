import React, { useEffect, useState } from 'react'
import EditTodo from './EditTodo'

const ListTodo = () => {
const [todos, setTodos] = useState([])
  const getTodo = async () =>{
    try {
      const response = await fetch("http://localhost:5007/todos")
   const jasonData = await response.json();
   setTodos(jasonData)
    } catch (err) {
      console.log(err);
    }
  }

  const deleteTodo = async (id) =>{
    try {
      const delTodo = await fetch(`http://localhost:5007/todos/${id}`,{
        method:"DELETE"
      })
      setTodos(todos.filter(todo => todo.todo_id !== id))
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() =>{
    getTodo();
  },[])
  return (
    <>
    <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
{ todos.map((item) =>(
  <tr>
    <td>{item.description}</td>
    <td><EditTodo todo={item} /></td>
    <td>
      <button className='btn btn-danger' onClick={() => deleteTodo(item.todo_id)}>Delete</button>
      </td>
  </tr>
))}
    </tbody>
  </table>
    </>
  )
}

export default ListTodo