import React from 'react';
import ReactDOM from 'react-dom';

import Board from './Board';

const App = () => (<Board />);

global.startApp = (container) => {
  console.log('Here is the container:', container); /* eslint-disable-line no-console */

  ReactDOM.render(
    <App />,
    container
  );
};
