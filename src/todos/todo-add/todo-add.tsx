import * as React from 'react';
import store from '../../store';
import { crear } from '../todo.actions';

interface IAppState {
  txtInput: string;
}

class TodoAdd extends React.Component<{}, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = { txtInput: '' };
    this.handleChange = this.handleChange.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  handleChange(event: any) {
    this.setState({ txtInput: event.target.value });
  }

  onKeyUp(event: any) {
    if (event.key.toUpperCase() === 'ENTER' && this.state.txtInput) {
      store.dispatch(crear({ texto: this.state.txtInput }))
      this.setState({ txtInput: '' });
    }
  }

  public render() {
    return (
      <header className="header">
        <h1>TODOS</h1>
        <input value={this.state.txtInput} onKeyUp={this.onKeyUp} onChange={this.handleChange}
          className="new-todo" placeholder="¿Que quieres hacer?" autoFocus />
      </header>
    );
  }
}

export default TodoAdd