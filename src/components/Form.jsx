import React from 'react';
import Input from './Input';

class Form extends React.Component {
  render() {
    const rarity = ['normal', 'raro', 'muito raro'];
    return (
      <form>
        <Input
          type="text"
          data-testid="name-input"
          label="Nome:"
          name="title"
        />
        <label htmlFor="form-description">
          Descrição:
          <textarea
            id="form-description"
            data-testid="description-input"
            name="description"
          />
        </label>
        <Input
          type="number"
          data-testid="attr1-input"
          label="Speed:"
          name="speed"
        />
        <Input
          type="number"
          data-testid="attr2-input"
          label="Strength:"
          name="strength"
        />
        <Input
          type="number"
          data-testid="attr3-input"
          label="Dexterity:"
          name="dexterity"
        />
        <Input
          type="text"
          data-testid="image-input"
          label="Image URL:"
          name="imageurl"
        />
        <select
          data-testid="rare-input"
        >
          {rarity.map((tier) => <option key={ tier }>{tier}</option>)}
        </select>
        <Input
          type="checkbox"
          data-testid="trunfo-input"
          label="SuperTrunfo?"
          name="isSuperTrunfo"
        />
        <button data-testid="save-button" type="button">Salvar</button>
      </form>
    );
  }
}

export default Form;
