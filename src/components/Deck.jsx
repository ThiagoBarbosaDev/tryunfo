import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class Deck extends React.Component {
  render() {
    const { renderCards, onChange, filterName } = this.props;
    const renderNoFilters = <div className="deck-container">{ renderCards() }</div>;
    // const renderNameFilter = <div className="deck-container">{ renderCards() }</div>;
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

        </section>
        {renderNoFilters}
      </>
    );
  }
}

Deck.propTypes = {
  renderCards: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
};

export default Deck;
