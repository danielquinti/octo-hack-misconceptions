import { useState } from 'react';
import './App.css';
import Theme from './Theme.js';
import YearSelector from './YearSelector.js';

function App() {
  var [info, setInfo] = useState([]);
  return (
    <>
      <YearSelector />
      {info.map((theme) => {
        return <Theme theme={theme} />;
      })}
    </>
  );
}

export default App;
