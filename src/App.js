import logo from './logo.svg';
import './App.css';
import ValidationOnSubmitcontrl from './ValidationOnSubmitcontrl';
import ValidationforInputscontrl from './ValidationforInputscontrl';
import Uncontrolled from './Uncontrolled';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Axios from './Axios';
function App() {
  
  return (
    <div className="App">
      {/* <ValidationOnSubmitcontrl/> */}
      <ValidationforInputscontrl/>
    {/* <Uncontrolled/> */}
    <Axios></Axios>
    </div>
  );
}

export default App;
