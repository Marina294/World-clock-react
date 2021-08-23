import React, {Component} from 'react';
import SearchBar from './search_bar';
import ClockList from './clock_list';
import './app.css'

export default class App extends Component{
  render() {
    return (
      <div className="wrap">
        <div className="container">
            <h1 className="appTitle">
              Check World Time
            </h1>
            <p className="subTitle">
              Refresh this Page! Background will change :D
            </p>
          <SearchBar />
          <ClockList />
        </div>
      </div>
    );
  }
}
