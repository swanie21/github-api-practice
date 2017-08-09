import React, { Component } from 'react';
import Moment from 'moment';

class Gist extends Component {

  constructor(props) {
    super(props);
  }

  _renderUnselectedStar() {
    return (
      <svg height="32" id="star" viewBox="0 0 32 32" width="32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 0 L21 11 L32 12 L23 19 L26 31 L16 25 L6 31 L9 19 L0 12 L11 11"/>
      </svg>
    );
  }

  _renderSelectedStar() {}

  render() {
    return (
      <li onClick={ () => { this.props.routePage(this.props.index); } }>
        <h3>{ this.props.description }</h3>
        <p>Date Created: { Moment(this.props.date).format('MMMM Do YYYY') }</p>
        { this._renderUnselectedStar() }
        { this._renderSelectedStar}
      </li>
    );
  }
}

export default Gist;
