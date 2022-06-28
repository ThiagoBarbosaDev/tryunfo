import React from 'react';
import PropTypes from 'prop-types';

class Combobox extends React.Component {
  render() {
    const { cardRare, onChange, label, selectData, dataTestId, name } = this.props;
    return (
      <label htmlFor="form-rarity">
        {label}
        <select
          id="form-rarity"
          name={ name }
          value={ cardRare }
          onChange={ onChange }
          data-testid={ dataTestId }
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
  dataTestId: PropTypes.string,
  name: PropTypes.string.isRequired,
};

Combobox.defaultProps = {
  dataTestId: null,
};

export default Combobox;
