import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Form />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('render with custom style', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Form style={{color: 'blue'}} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
