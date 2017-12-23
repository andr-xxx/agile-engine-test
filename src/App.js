import React, {Component} from 'react';
import './app.css';
import headerImage from './assets/images/header-image.png';

import CsvLayoutContainer from './containers/CsvLayout';
import TableLayoutContainer from './containers/TableLayout';
import {HeaderComponent} from "./components/Header";

class App extends Component {
  render() {
    return (
      [
        <HeaderComponent image={headerImage} key='header'/>
        ,
        <main className='container' key='main'>
          <CsvLayoutContainer/>
          <TableLayoutContainer/>
        </main>
      ]
    );
  }
}

export default App;
