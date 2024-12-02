import React from 'react';
import ReactDOM from 'react-dom/client';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import App from './App.tsx';

const container = document.getElementById('root');

if (!container) throw new Error('Failed to find root element');
ReactDOM.createRoot(
  document.getElementById('root')!).render(

    <React.StrictMode>

      <FluentProvider theme={webLightTheme}>
        <App />
      </FluentProvider>



    </React.StrictMode>,

  );


// ReactDOM.render(
//   <FluentProvider theme={webLightTheme}>
//     <App />
//     <h1> 
//        <Print message="Test Place" />
//     </h1>
//   </FluentProvider>,
//   document.getElementById('root'),
// );
