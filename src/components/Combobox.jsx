import React from 'react';
import PropTypes from 'prop-types';

class Combobox extends React.Component {
  render() {
    const { cardRare, onChange, label } = this.props;
    const rarity = ['normal', 'raro', 'muito raro'];
    return (
      <label htmlFor="form-rarity">
        {label}
        <select
          data-testid="rare-input"
          id="form-rarity"
          name="cardRare"
          value={ cardRare }
          onChange={ onChange }
        >
          {rarity.map((tier) => (
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
};

export default Combobox;
