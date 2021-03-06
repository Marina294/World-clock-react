import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment-timezone';

import {deleteTimezone} from '../actions/index'
import './clock.css'

class Clock extends Component{
  getCurrentDate() {
    const dateFormat = 'MM/DD'
    return moment.tz(this.props.timezoneName).format(dateFormat);
  }

  getCurrentTime() {
    const dateFormat = 'HH:mm:ss'
    return moment.tz(this.props.timezoneName).format(dateFormat);
  }

  getDST() {
    if(moment.tz(this.props.timezoneName).isDST()) {
      return <span className="clock-dst">DST</span>;
    }
  }

  onDeleteClick() {
    this.props.deleteTimezone(this.props.timezoneName);
  }

  render() {
    return (
      <div className="wrap">
      <div className="Clock clearfix">
        <div className="clock-icon"><i className="gg-move-task"></i></div>
        <div className="break-word">
        <div className="clock-name">{this.props.timezoneName}</div>
        </div>
        <div className="clock-time">{this.getCurrentTime()}</div>
        <div className="clock-date">
          {this.getCurrentDate()}<br />
          {this.getDST()}
        </div>
        <div className="gg-close clock-delete">
          <button className="gg-close btn float-right"
            onClick={this.onDeleteClick.bind(this)}
          >×
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default connect(null, {deleteTimezone})(Clock);
