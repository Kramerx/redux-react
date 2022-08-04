import { createReducer } from '@reduxjs/toolkit'
import { FiltrosValidos } from './models/todo.model';
import { setFiltro } from './filter.actions';

export const initialState: FiltrosValidos = 'todos' as FiltrosValidos

export const filterReducer = createReducer(
    initialState,
    (builder) => {
        builder.addCase(setFiltro, (state, action) => action.payload.filtro)
    }
);