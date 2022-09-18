import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';
import {deleteTodo, toggleTodo} from "../redux/todoSlice"
import DoneIcon from '@mui/icons-material/Done';


const TodoItem = ({id, text, completed}) => {
  const dispatch = useDispatch()
  const handleDelete = () => {
    dispatch(deleteTodo(id))
  }
  const handleToggle = () => {
    dispatch(toggleTodo(id))
  }

 
  const styled = {
    textDecoration: completed ? "line-through" : "none",
    backgroundColor: completed ? "#A9A9A9" : "orange",
    borderRadius: "5px",    
  };

  return (

      <div className='todo_item' style={styled}>
        <Box sx={{ width: '100%' }}>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding className='list_item'>
                <ListItemText className='list_item-text' primary={text}/>
                <ListItemButton className="list_item-btn" >
                    <DoneIcon onClick={handleToggle} className="done_icon"/>
                </ListItemButton>
                <ListItemButton className="list_item-btn" >
                    <DeleteIcon onClick={handleDelete} className="delete_icon" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box> 
      </div>

    
  )
}

export default TodoItem