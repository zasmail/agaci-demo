import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {InstantSearch, Hits} from 'react-instantsearch/dom';


class App extends Component {
  render() {
    return (
      <InstantSearch
        appId="latency"
        apiKey="3d9875e51fbd20c7754e65422f7ce5e1"
        indexName="bestbuy"
      >
        <Search />
      </InstantSearch>
    );
  }

}

export default App;
