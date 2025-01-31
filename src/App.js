import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Heading from './components/Heading';
import Poems from './components/Poems';
import Footer from './components/Footer';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <Poems />
      <Footer />
      {/* <Form /> */}
    </div>
  );
}

export default App;
