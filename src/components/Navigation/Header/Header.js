import React from 'react'

import Button from '../../UI/Button/Button';
import './Header.scss'

const Header = () => {
  return ( 
    <div className="header-container">
      <div className="logo">
        <h1>Lash maker assistant</h1>
      </div>  
      <div className="button-container">
        <Button
        >Dodaj klientkę</Button>
      </div>
    </div>
  );
}


 
export default Header;