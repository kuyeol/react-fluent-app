import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import HeaderContainer from './ui/HeaderContainer'
import { Button } from '@fluentui/react-components'
import Print from './testcomponents/print'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <div> 
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> 
      <h1>Vite + React</h1>
      <Button appearance='primary' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button  onClick={() => setCount(10)}>reset</Button>
   

      <div className="card">
           <HeaderContainer/>


         <Print message="Test Place a" />
   
      </div>
   
  
    </div>
  )
}

export default App
