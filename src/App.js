import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainNav from './Components/MainNav';

function App() {
  return (
    <Router>
      <MainNav />
    </Router>
  );
}

export default App;
