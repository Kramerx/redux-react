import * as React from 'react';
import store from '../../store';
import { FiltrosValidos, Todo } from '../models/todo.model';
import TodoItem from '../todo-item/todo-item';

interface ITodoListState {
  todos: Todo[],
  filtroActual: FiltrosValidos
}

class TodoList extends React.Component<{}, ITodoListState> {

  constructor(props: any) {
    super(props);
    this.state = {
      todos: [],
      filtroActual: 'todos' as FiltrosValidos
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(() => {
        return {
          todos: store.getState().todoReducer,
          filtroActual: store.getState().filterReducer
        }
      })
    })
  }

  renderSwitch(filtro: string): Todo[] {
    switch (filtro) {
      case 'completados':
        return this.state.todos.filter(e => e.completado)
      case 'pendientes':
        return this.state.todos.filter(e => !e.completado)
      default:
        return this.state.todos;
    }
  }

  public render() {
    return (
      <ul className="todo-list">
        {
          this.renderSwitch(this.state.filtroActual).map(todo => {
            return <TodoItem key={todo.id} todo={todo}></TodoItem>
          })}
      </ul>
    );
  }
}

export default TodoList;
