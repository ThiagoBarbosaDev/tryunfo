import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import Combobox from './Combobox';

class Deck extends React.Component {
  render() {
    const { renderCards,
      onChange, filterName, filterRare, filterTrunfo, hasTrunfo } = this.props;
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
            disabled={ filterTrunfo }
          />
          <Combobox
            cardRare={ filterRare }
            onChange={ onChange }
            label="Por raridade:"
            name="filterRare"
            selectData={ ['todas', 'normal', 'raro', 'muito raro'] }
            data-testid="rare-filter"
            disabled={ filterTrunfo }
          />
          <Input
            type="checkbox"
            data-testid="trunfo-filter"
            label="Por trunfo"
            name="filterTrunfo"
            onChange={ onChange }
            checked={ filterTrunfo }
            disabled={ !hasTrunfo }
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
  filterTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
};

export default Deck;
