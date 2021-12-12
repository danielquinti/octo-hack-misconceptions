import { useState, useRef } from 'react';
import './App.css';
import Theme from './Theme.js';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import getMisconceptionsByYear from './utils.js';
// import YearSelector from './YearSelector.js';

function App() {
  const [info, setInfo] = useState([]);
  const yearSelectRef = useRef();
  var years = (() => {
    var min = 1985;
    var max = 2021;
    var years = [];
    for (var i = min; i < max; i++) {
      years.push(i);
    }
    return years;
  })();
  

  function handleSetYear(e) {
   const year = yearSelectRef.current.value;
    // Fetch data and build info object, then set it
    // const loadData = () => JSON.parse(dbJSON);
    var misconceptions = getMisconceptionsByYear(year);
    setInfo(misconceptions);
    
  }
  return (
    <>
      <Form.Select ref={yearSelectRef}>
        {years.map((year) => {
         return <option>{year}</option>;
        })}
      </Form.Select>
      <Button variant="primary" onClick={handleSetYear}>Primary</Button>
      <br />
      {info.map((theme) => {
        return <Theme theme={theme} />;
      })}
      
    </>
  ); 
}

export default App;
