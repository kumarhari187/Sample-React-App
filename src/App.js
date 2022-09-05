import React, { useState } from "react";
import Counter from "./Counter";

export const ButtonColorContext = React.createContext()

function App() {
  const [buttonColor, setButtonColor] = useState('black')
  return (
    <ButtonColorContext.Provider value={{ backgroundColor: buttonColor }}>
      <button onClick={() => setButtonColor(prevButtonColor => prevButtonColor === 'gray' ? 'white' : 'gray')}>Toggle Button Color</button>
      <br />
      <br />
      <Counter initialCount={0}/>
    </ButtonColorContext.Provider>
  );
}

export default App;
