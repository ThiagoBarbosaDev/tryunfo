import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

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

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo } = this.state;

    const cardProps = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };

    return (
      <main>
        <Form onInputChange={ this.handleChange } { ...this.state } />
        <button onClick={ this.handleFormValidation } type="button"> teste </button>
        <section className="card-preview-section">
          <h2 className="preview-title">PREVIEW</h2>
          <Card { ...cardProps } />
        </section>
      </main>
    );
  }
}

export default App;
