import React from 'react';
import PropTypes from 'prop-types';

class Combobox extends React.Component {
  render() {
    const { cardRare, onChange, label, selectData, name, ...otherProps } = this.props;
    return (
      <label htmlFor="form-rarity">
        {label}
        <select
          id="form-rarity"
          name={ name }
          value={ cardRare }
          onChange={ onChange }
          { ...otherProps }
        >
          {selectData.map((tier) => (
            <option key={ tier }>{tier}</option>
          ))}
        </select>
      </label>
    );
  }
}

Combobox.propTypes = {
  cardRare: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  selectData: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
};

export default Combobox;
