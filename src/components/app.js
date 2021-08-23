import React, {Component} from 'react';
import SearchBar from './search_bar';
import ClockList from './clock_list';
import './app.css'
// import Background from href('https://unsplash.com/photos/HNkgPFBShSw');

export default class App extends Component{
  render() {
    return (
      <div className="wrap">
        <div className="container">
          {/* <div className="appTitleBackground"> */}
            <h1 className="appTitle">
              Check World Time
            </h1>
            <p className="subTitle">
              Refresh Page! Background will change :D
            </p>
          <SearchBar />
          {/* </div> */}
          {/* <hr /> */}
          <ClockList />
        </div>
      </div>
    );
  }
}
