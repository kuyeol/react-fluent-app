
import App from './App.tsx'

import { createRoot } from 'react-dom/client';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import Print from './testcomponents/print.tsx';


const root = createRoot(document.getElementById('root'));

root.render(
  <FluentProvider theme={webLightTheme}>
    <App />
        <h1> 
        <Print message="Test Place" />
     </h1>
  </FluentProvider>,
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
