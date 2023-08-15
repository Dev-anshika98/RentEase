import { useState } from 'react'

import Navbar from './Navbar'

function App() {
  const [count, setCount] = useState(0)
  
switch (window.location.pathname){
  case "/":
    break
    case "/pricing":
      break
      case "/about":
      break

}

  return (
  <>
  <Navbar />
  </>
  );
};

export default App
