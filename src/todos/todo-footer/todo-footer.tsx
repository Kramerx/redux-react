import * as React from 'react';
import store from '../../store';
import { setFiltro } from '../filter.actions';
import { FiltrosValidos } from '../models/todo.model';
import { limpiarCompletados } from '../todo.actions';


interface ITodoFooterState {
  filtroActual: FiltrosValidos
  filtros: FiltrosValidos[]
  pendientes: number
}

class TodoFooter extends React.Component<{}, ITodoFooterState> {

  constructor(props: any) {
    super(props);
    this.state = {
      filtroActual: "todos",
      filtros: ['todos', "completados", 'pendientes'],
      pendientes: 0
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(() => {
        return {
          filtroActual: store.getState().filterReducer,
          pendientes: store.getState().todoReducer.filter(e => !e.completado).length
        }
      })

    })
  }

  cambiarFiltro(filtro: FiltrosValidos) {
    store.dispatch(setFiltro({ filtro }))
  }

  limpiarCompletados() {
    store.dispatch(limpiarCompletados())
  }

  public render() {
    return (
      <footer className="footer">
        <span className="todo-count"><strong>{this.state.pendientes}</strong> Pendientes</span>
        <ul className="filters">
          {this.state.filtros.map((filtro, index) => {
            return (
              <li key={index} onClick={() => this.cambiarFiltro(filtro)}>
                <a className={filtro === this.state.filtroActual ? 'selected' : ''} href="#/">{filtro}</a>
              </li>
            )
          })}
        </ul>
        <button className="clear-completed" onClick={this.limpiarCompletados}>Limpiar Completados</button>
      </footer>
    );
  }
}

export default TodoFooter;
