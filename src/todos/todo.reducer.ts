import { createReducer } from '@reduxjs/toolkit'
import { Todo } from './models/todo.model';
import { crear, editar, eliminar, limpiarCompletados, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = []

export const todoReducer = createReducer(
    initialState,
    (builder) => {
        builder.addCase(crear, (state, action) => [...state, new Todo(action.payload.texto)])
        builder.addCase(toggle, (state, action) => {
            return state.map(e => {
                if (e.id === action.payload.id) {
                    return { ...e, completado: !e.completado };
                } else {
                    return e;
                }
            })
        })
        builder.addCase(editar, (state, action) => {
            return state.map(e => {
                if (e.id === action.payload.id) {
                    return {
                        ...e,
                        texto: action.payload.texto
                    }
                } else {
                    return e;
                }

            });
        })
        builder.addCase(eliminar, (state, action) => state.filter(e => e.id !== action.payload.id))
        builder.addCase(toggleAll, (state, action) => state.map(e => { return { ...e, completado: action.payload.completado } }))
        builder.addCase(limpiarCompletados, (state, action) => state.filter(e => !e.completado))
    }
);