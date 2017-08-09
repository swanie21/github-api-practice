import React from 'react';

function Form (props) {
  return (
    <form>
      <input
        type='text'
        value={ props.username }
        name='username'
        id='username'
        onChange={ props.handleInput }
        placeholder='Enter Username'
      />
      <label htmlFor='username'></label>
      <button onClick={ props.submitUsername }>Submit</button>
      <input
        type='text'
        value={ props.gistId }
        name='gistId'
        id='gistId'
        onChange={ props.handleInput }
        placeholder='Enter Gist Id'
      />
      <label htmlFor='gistId'></label>
      <button onClick={ props.submitGistId }>Submit</button>
    </form>
  );
}

export default Form;
