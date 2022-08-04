import { createAction } from '@reduxjs/toolkit'
import { FilterState } from './models/todo.model';

export const setFiltro = createAction<FilterState>('[Filtro] Set Filter');
