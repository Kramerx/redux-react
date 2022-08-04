import * as React from 'react';
import store from '../../store';
import { Todo } from '../models/todo.model';
import { editar, eliminar, toggle } from '../todo.actions';

interface ITodoItemProps {
  todo: Todo
}

interface ITodoItemState {
  todo: Todo,
  editando: boolean
}

class TodoItem extends React.Component<ITodoItemProps, ITodoItemState> {

  constructor(props: any) {
    super(props);
    this.state = {
      todo: props.todo,
      editando: false
    }
    this.editar = this.editar.bind(this);
    this.terminarEdit = this.terminarEdit.bind(this);
    this.borrar = this.borrar.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onChangeCB = this.onChangeCB.bind(this);
  }

  editar() {
    this.setState(() => {
      return {
        editando: true
      }
    })
  }

  terminarEdit() {
    this.setState(() => {
      return {
        editando: false
      }
    })
    if (!this.props.todo.texto) { return }
    if (this.state.todo.texto === this.props.todo.texto) { return }
    store.dispatch(editar({ id: this.props.todo.id, texto: this.state.todo.texto }))
  }

  borrar() {
    store.dispatch(eliminar({ id: this.props.todo.id }))
  }

  onChangeText(event: any) {
    this.setState((prevState) => {
      return { todo: { ...prevState.todo, texto: event.target.value } }
    })
  }

  onChangeCB(event: any) {
    store.dispatch(toggle({ id: this.state.todo.id }))
  }

  public render() {
    return (
      <li className={(this.props.todo.completado ? 'completed' : '') + ' ' + (this.state.editando ? 'editing' : '')} >
        <div className="view">
          <input className="toggle" type="checkbox" checked={this.props.todo.completado} onChange={this.onChangeCB} />
          <label onDoubleClick={this.editar}>{this.props.todo.texto}</label>
          <button className="destroy" onClick={this.borrar}></button>
        </div>
        <input className="edit" value={this.state.todo.texto} onBlur={this.terminarEdit} onChange={this.onChangeText} />
      </li>
    );
  }
}

export default TodoItem;
