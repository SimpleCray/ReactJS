import React, { Component } from 'react';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
        text: this.props.text || ''
    };

    autoBind(this);
}

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
        this.props.onSave(text);
        if (this.props.newTodo) {
            this.setState({ text: '' });
        }
    }
  }

  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <input 
          type='text'
          placeholder={this.props.placeholder}
          autoFocus='true'
          onKeyDown={this.handleSubmit} />
      </div>
    );
  }
}

export default Header;