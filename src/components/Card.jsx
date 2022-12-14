import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.props;
    return (
      <div className="card-container">
        <p data-testid="name-card">{ cardName }</p>
        <img
          src={ cardImage }
          alt={ cardName }
          data-testid="image-card"
          className="card-container__image"
        />
        <p data-testid="description-card">{cardDescription}</p>
        <section>
          <div data-testid="attr1-card">
            <span>Speed:</span>
            {cardAttr1}
          </div>
          <div data-testid="attr2-card">
            <span>Strength:</span>
            {cardAttr2}
          </div>
          <div data-testid="attr3-card">
            <span>Dexterity:</span>
            {cardAttr3}
          </div>
        </section>
        <div data-testid="rare-card">{cardRare}</div>
        {cardTrunfo && <div data-testid="trunfo-card" className="st"> Super Trunfo </div>}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
