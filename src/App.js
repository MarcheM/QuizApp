import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './components/Content'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <Nav />
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
