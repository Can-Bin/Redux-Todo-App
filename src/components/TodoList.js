import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from "./TodoItem" 

const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    


  return (
    <div className='todo_list'>
            {todos.map((todo) => {
              return(
                <TodoItem key={todo.id} {...todo}/>
              )
            })}        
        
    </div>
  )
}

export default TodoList