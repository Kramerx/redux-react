import { configureStore } from '@reduxjs/toolkit'
import { AppState } from './todos/models/todo.model'
import { todoReducer } from './todos/todo.reducer';
import { filterReducer } from './todos/filter.reducer';

const initState: AppState = {
    todos: [],
    filtro: 'todos'
};

const store = configureStore({
    reducer: {
        todoReducer,
        filterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export default store;