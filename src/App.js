import React from 'react';
import Form from './components/Form';
// import Card from './components/Card';
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
      isSaveButtonDisabled: false,
    };
  }

  handleChange = ({ target }) => {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form onInputChange={ this.handleChange } { ...this.state } />
        {/* <Card onInputChange={ this.handleChange } /> */}
      </div>
    );
  }
}

export default App;
