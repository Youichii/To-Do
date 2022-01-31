import './App.css';
import React from 'react';
import Todo from './todo'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

function App() {
    return(
      <Router>
      
          <Routes>
            <Route path='/' exact element={<Todo/>}/>
          </Routes>
          
       
    </Router>
  );
}

export default App;
