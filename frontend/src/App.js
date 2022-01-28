import './App.css';
import React from 'react';
import Test from './test'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

function App() {
    return(
      <Router>
      
          <Routes>
            <Route path='/login' exact element={<Test/>}/>
          </Routes>
          
       
    </Router>
  );
}

export default App;
