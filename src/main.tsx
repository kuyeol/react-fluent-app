// Suggested code may be subject to a license. Learn more: ~LicenseLog:3853072530.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:4206024641.

import App from './App.tsx'

import { createRoot } from 'react-dom/client';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';


const container = document.getElementById('root');

if (!container) throw new Error('Failed to find root element');
const root = createRoot(container);

root.render(
  
  
      <div className="root">
  <FluentProvider theme={webLightTheme}>
    <App />
  </FluentProvider>
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
