
import App from './App.tsx'

import { createRoot } from 'react-dom/client';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';


const root = createRoot(document.getElementById('root'));

root.render(
  <div className="root">
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>,
</div>
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
