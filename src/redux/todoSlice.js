import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'

const initialState = []

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (action.payload) {
                const newTodo = {
                    id: state.length,
                    text: action.payload,
                    completed: false
                   }
                   state.push(newTodo)
                   console.log(current(state))
            }
        },
        deleteTodo: (state, action) => {
            const remainTodos = state.filter((item) => item.id !== action.payload)
            console.log(action.payload)
            return remainTodos;
        },
        toggleTodo: (state, action) => {
           const toggledTodos = state.map((item) => item.id === action.payload ? {...item, completed: !item.completed } : item)
           console.log(toggledTodos)
           return toggledTodos;
        },

        clearAllTodos:(state, action) => {
            return( initialState)
    }
}})

export const {addTodo, deleteTodo, toggleTodo, clearAllTodos} = todoSlice.actions
export default todoSlice.reducer;