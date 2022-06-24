import React from 'react';

class Input extends React.Component {
  render() {
    const { label, id, type, ...otherProps } = this.props;
    return (
      <label htmlFor={id}>
        { label }
        <input
          type={ type }
          { ...otherProps }
        />
      </label>
    );
  }
}

export default Input;
