import React from 'react';
import Moment from 'moment';

function SingleGist (props) {
  if(props.date) {
    return (
      <div>
        <h3>{ props.description }</h3>
        <p>{ Moment(props.date).format('MMMM Do YYYY') }</p>
      </div>
    );
  } else {
    return null
  }
}

export default SingleGist;
