import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './components/Content'
import Nav from './components/Nav'

function App() {
  return (
    <Router>
      <Nav />
      <Content />

    </Router>
  );
}

export default App;
