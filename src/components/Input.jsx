import React from 'react';
import PropTypes from 'prop-types';

class Input extends React.Component {
  render() {
    const { label, type, name, value, checked, ...otherProps } = this.props;
    return (
      <label htmlFor={ `form-${name}` }>
        { label }
        <input
          name={ name }
          id={ `form-${name}` }
          type={ type }
          value={ value }
          checked={ checked }
          { ...otherProps }
        />
      </label>
    );
  }
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  checked: PropTypes.bool,
};

Input.defaultProps = {
  value: '',
  checked: null,
};

export default Input;
