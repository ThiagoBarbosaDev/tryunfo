import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Combobox from './Combobox';

class Deck extends React.Component {
  render() {
    const { renderCards, onChange, filterName, filterRare } = this.props;
    return (
      <>
        <section className="filter-container">
          <h3>Filters</h3>
          <Input
            name="filterName"
            data-testid="name-filter"
            type="text"
            label="Por nome: "
            value={ filterName }
            onChange={ onChange }
          />
          <Combobox
            cardRare={ filterRare }
            onChange={ onChange }
            label="Rarity:"
            name="filterRare"
            selectData={ ['todas', 'normal', 'raro', 'muito raro'] }
            dataTestId="rare-filter"
          />
        </section>
        <div className="deck-container">{ renderCards() }</div>
      </>
    );
  }
}

Deck.propTypes = {
  renderCards: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterRare: PropTypes.string.isRequired,
};

export default Deck;
