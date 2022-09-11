import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Vector from '../images/Vector.png';

export default class Header extends React.Component {
  render() {
    const { search, onInputChange, onClick } = this.props;
    return (
      <header className="header">
        <form>
          <input
            type="text"
            name="search"
            id=""
            onChange={ onInputChange }
            value={ search }
            placeholder="Digite o que você busca"
            data-testid="query-input"
          />
          <button
            type="button"
            data-testid="query-button"
            onClick={ onClick }
          >
            🔎
          </button>
        </form>
        <div>
          <h1>Front-end</h1>
          <p>online store</p>
        </div>
        <nav>
          <Link to="/cart" data-testid="shopping-cart-button">
            <img
              width="50"
              height="50"
              src={ Vector }
              alt="Cart-img"
            />
          </Link>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  search: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
