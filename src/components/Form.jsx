import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    return (
      <form>
        <Input
          type="text"
          data-testid="name-input"
          label="Nome:"
        />
      </form>
    )
  }
}

export default Form;
