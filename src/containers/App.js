import React, { Component } from 'react';
import './App.css';
import Moment from 'moment';
import Gist from '../components/Gist';
import Form from '../components/Form';
import SingleGist from '../components/SingleGist';
import { fetchGistsByUsername, fetchGistById } from '../services/github.helpers';

class App extends Component {

  constructor() {
    super();

    this.state = {
      gists: [],
      singleGist: {},
      username: '',
      gistId: '',
      page: 0
    }
    this._handleInput = this._handleInput.bind(this);
    this._clearInput = this._clearInput.bind(this);
    this._submitUsername = this._submitUsername.bind(this);
    this._submitGistId = this._submitGistId.bind(this);
    this._routePage = this._routePage.bind(this);
  }

  _handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  _clearInput (e) {
    this.setState({
      username: '',
      gistId: ''
    });
  }

  _submitUsername(e) {
    e.preventDefault();
    this._clearInput();
    fetchGistsByUsername(this.state.username)
      .then(response => {
        this.setState({
          gists: response.data
        })
      })
    .catch(error => {
      console.log(error);
    });
  }

  _submitGistId(e) {
    e.preventDefault();
    this._clearInput();
    fetchGistById(this.state.gistId)
      .then(response => {
        this.setState({
          singleGist: response.data
        })
      })
    .catch(error => {
      console.log(error);
    });
  }

  _routePage(page) {
    this.setState({
      page: page
    });
  }

  _renderGists(gists) {
    if(gists.length > 0) {
      return gists.map((gist, index) => {
        return (
          <Gist
            index={ index }
            key={ index }
            description={ gist.description }
            date={ gist.created_at }
            routePage={ this._routePage }
          />
        );
      })
    } else return null;
  }

  _renderSingleGist(gist) {
    return (
      <SingleGist
        description={ gist.description }
        date={ gist.created_at }
      />
    );
  }

  _renderGistDetail(gists, page) {
    if(gists.length > 0) {
      return (
        <div className='detail'>
          <h3>{ gists[page].description}</h3>
          <p>{ Moment(gists[page].created_at).format('MMMM Do YYYY')}</p>
        </div>
      );
    } else return null;
  }

  render() {
      return (
      <div className='app'>
        <h1>Find Gists by Username</h1>
        <Form
          username={ this.state.username }
          gistId={ this.state.gistId }
          handleInput={ this._handleInput }
          submitUsername={ this._submitUsername}
          submitGistId={ this._submitGistId }
        />
        <ul className='list'>
          { this._renderGists(this.state.gists) }
        </ul>
        <ul className='list'>
          { this._renderSingleGist(this.state.singleGist) }
        </ul>
        { this.state.gists.length > 0 ? this._renderGistDetail(this.state.gists, this.state.page) : null }
      </div>
    );
  }
}

export default App;
