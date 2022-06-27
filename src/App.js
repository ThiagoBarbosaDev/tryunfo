import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';
import Deck from './components/Deck';

const ON_SAVE_RESET_FORM = {
  cardName: '',
  cardDescription: '',
  cardAttr1: '0',
  cardAttr2: '0',
  cardAttr3: '0',
  cardImage: '',
  cardRare: 'normal',
  cardTrunfo: false,
  isSaveButtonDisabled: true,
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardData: [],
    };
  }

  handleFormValidation = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxAttrValue = 90;
    const maxAttrValueSum = 210;
    const attr1Value = parseInt(cardAttr1, 10);
    const attr2Value = parseInt(cardAttr2, 10);
    const attr3Value = parseInt(cardAttr3, 10);

    const formFieldValidationChecks = [
      cardName,
      cardDescription,
      cardImage,
      !!cardAttr1 && attr1Value <= maxAttrValue && attr1Value >= 0,
      !!cardAttr2 && attr2Value <= maxAttrValue && attr2Value >= 0,
      !!cardAttr3 && attr3Value <= maxAttrValue && attr3Value >= 0,
      attr1Value + attr2Value + attr3Value <= maxAttrValueSum,
    ];

    const areAllFieldsValid = !formFieldValidationChecks.every((field) => !!field);
    this.setState({
      isSaveButtonDisabled: areAllFieldsValid,
    });
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    }, () => this.handleFormValidation());
  }

  hasTrunfo = () => {
    const { cardData } = this.state;
    const hasTrunfo = cardData.some((card) => card.cardTrunfo);
    this.setState({
      hasTrunfo,
    });
  }

  handleRemove = (cardN) => {
    const { cardData } = this.state;
    const updateHasTrunfo = this.hasTrunfo;
    cardData.splice(cardN, 1);
    this.setState({
      cardData,
    }, () => updateHasTrunfo());
  }

  renderSavedCards = () => {
    const { cardData } = this.state;
    const newCard = cardData.map((card) => (
      <>
        <Card { ...card } key={ card.name } />
        <button
          key={ `button-${card.cardName}` }
          type="button"
          data-testid="delete-button"
          onClick={ () => this.handleRemove(cardData.indexOf(card)) }
        >
          Excluir
        </button>
      </>));
    return newCard;
  }

  handleButtonClick = (event) => {
    event.preventDefault();

    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const thisCardData = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prevState) => ({
      cardData: [...prevState.cardData, thisCardData], ...ON_SAVE_RESET_FORM,
    }), () => this.hasTrunfo());
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const cardProps = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };

    const metodos = {
      onInputChange: this.handleChange,
      onSaveButtonClick: this.handleButtonClick,
    };

    return (
      <>
        <main>
          <Form { ...metodos } { ...this.state } />
          {/* <Form onInputChange={ this.handleChange } { ...this.state } /> */}
          {/* <button onClick={ this.isThereTrunfo } type="button"> teste </button> */}
          <section className="card-preview-section">
            <h2 className="preview-title">PREVIEW</h2>
            <Card { ...cardProps } />
          </section>
        </main>
        <section className="deck-page">
          <Deck renderCards={ this.renderSavedCards } />
        </section>
      </>
    );
  }
}

export default App;
