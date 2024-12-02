
import React from 'react';
import App from './App.tsx'

import ReactDOM from 'react-dom';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import Print from './testcomponents/print.tsx';


ReactDOM.render(
  <FluentProvider theme={webLightTheme}>
    <App />

    <h1> 
       <Print message="Test Place" />
    </h1>
  </FluentProvider>,
  document.getElementById('root'),
);
