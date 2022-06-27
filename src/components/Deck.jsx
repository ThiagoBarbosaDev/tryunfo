import React from 'react';
import PropTypes from 'prop-types';

class Deck extends React.Component {
  render() {
    const { renderCards } = this.props;
    return (
      <>
        <section className="filter-container">
          <h3>Filters</h3>
        </section>
        <div className="deck-container">{ renderCards() }</div>
      </>
    );
  }
}

Deck.propTypes = {
  renderCards: PropTypes.func.isRequired,
};

export default Deck;
