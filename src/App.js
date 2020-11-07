import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './components/Content'
import Nav from './components/organisms/Nav'
import Footer from './components/organisms/Footer'

function App() {
  return (
    <Router>
      <Content />
      <Footer />
    </Router>
  );
}

export default App;
