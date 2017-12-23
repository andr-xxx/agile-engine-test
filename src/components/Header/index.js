import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export const HeaderComponent = ({image}) => (
  <header className='header'>
    <img src={image} alt="header"/>
  </header>
);

HeaderComponent.propTypes = {
  image: PropTypes.string.isRequired
};