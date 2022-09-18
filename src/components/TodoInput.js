import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch} from 'react-redux'
import { addTodo, clearAllTodos } from '../redux/todoSlice'
import { useState } from 'react';

const TodoInput = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = () => {
      dispatch(addTodo(text))
      setText("")
      console.log(text)
    }

    const handleClearAll = () => {
      dispatch(clearAllTodos())
    }   

    return (
    <div>
        <Box className="todo_input">
      <TextField sx={{m: 5}} id="outlined-basic" label="Add Todo" value={text} variant="outlined" onChange={(e) => setText(e.target.value)} />
      <Button sx={{mb: 5}} color="secondary" variant="contained" onClick={handleSubmit}>ADD</Button>
      <Button sx={{mb: 5}} color="error" variant="contained" onClick={handleClearAll}>CLEAR ALL</Button>
    </Box>      
    </div>
  )
}

export default TodoInput;