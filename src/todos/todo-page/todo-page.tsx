import * as React from 'react';
import store from '../../store';
import TodoAdd from '../todo-add/todo-add';
import TodoFooter from '../todo-footer/todo-footer';
import TodoList from '../todo-list/todo-list';
import { toggleAll } from '../todo.actions';

class TodoPage extends React.Component<{}, { complete: boolean }> {

  constructor(props: any) {
    super(props);
    this.state = {
      complete: false
    }
    this.toggleAll = this.toggleAll.bind(this)
  }

  toggleAll() {
    this.setState((prevState) => {
      return {
        complete: !prevState.complete
      }
    })
    store.dispatch(toggleAll({ completado: this.state.complete }))
  }

  public render() {
    return (
      <section className="todoapp">

        <TodoAdd></TodoAdd>

        <section className="main">
          <input onClick={this.toggleAll} id="toggle-all" className="toggle-all" type="checkbox" />
          <label form="toggle-all" onClick={this.toggleAll}>Marcar todas como completadas</label>

          <TodoList></TodoList>

        </section>

        <TodoFooter></TodoFooter>

      </section>
    );
  }
}

export default TodoPage;
