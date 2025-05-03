import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Clockheading from './components/Clockheading';
import Currtime from './components/Currtime';
import Clockslogen from './components/Clockslogen';



function App() {
  const [count, setCount] = useState(0)

  return <center>
  <Clockheading />
  <Clockslogen />
  <Currtime />
  </center>
    
         
    
  
}

export default App;
