import React from 'react';
import ReactDOM from 'react-dom';
import Kitchen from './Kitchen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Kitchen />, div);
});
