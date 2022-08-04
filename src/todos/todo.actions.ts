import { createAction } from '@reduxjs/toolkit'
import { TodoCrearState, TodoDeleteState, TodoEditState, TodoToggleAllState, TodoToggleState } from './models/todo.model';

export const crear = createAction<TodoCrearState>('[TODO] Crear Todo');
export const toggle = createAction<TodoToggleState>('[TODO] Toggle Todo');
export const editar = createAction<TodoEditState>('[TODO] Editar Todo');
export const eliminar = createAction<TodoDeleteState>('[TODO] Delete Todo');
export const toggleAll = createAction<TodoToggleAllState>('[TODO] Toggle All Todo');
export const limpiarCompletados = createAction('[TODO] Limpiar Todo');