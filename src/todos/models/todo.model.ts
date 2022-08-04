export class Todo {
    id: number;
    texto: string;
    completado: boolean;

    constructor(texto: string) {
        this.texto = texto;
        this.id = new Date().getTime();
        this.completado = false;
    }
}

export interface AppState {
    todos: Todo[],
    filtro: FiltrosValidos
}

export interface TodoCrearState {
    texto: string;
}

export interface TodoToggleState {
    id: number;
}

export interface TodoEditState {
    id: number;
    texto: string;
}

export interface TodoDeleteState {
    id: number;
}

export interface TodoToggleAllState {
    completado: boolean
}

export type FiltrosValidos = 'todos' | 'completados' | 'pendientes';

export interface FilterState {
    filtro: FiltrosValidos
}