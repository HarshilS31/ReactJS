import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
interface Todo {
    id: string;
    text: string;
}
interface TodoState {
    todos: Todo[];
}
const initialState: TodoState = {
    todos: [{ id: '1', text: "Hello, how u doin!" }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    // 2. Use object syntax for standard reducers
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const todo: Todo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            state.todos =state.todos.filter((todo)=>todo.id!==action.payload)  
        },
        updateTodo:(state,action:PayloadAction<string>) => {
            state.todos = state.todos.map(todo=>todo.id===action.payload ? { ...todo, text: action.payload}: todo)
        }
    }
});

// Export actions and reducer
export const { addTodo, removeTodo,updateTodo } = todoSlice.actions;
export default todoSlice.reducer;