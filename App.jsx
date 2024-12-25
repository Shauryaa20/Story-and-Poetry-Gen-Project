import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Story & Poetry Generator</h1>
        <p>Unleash the creativity of AI in generating captivating stories and poetic verses.</p>
      </header>

      <main>
        <section className="card-section">
          <div className="cards">
            <h2>Generate a Story</h2>
            <p>Looking for an adventurous or heartwarming story? Click below to create your own story.</p>
            <button className="card-button">Generate Story</button>
          </div>

          <div className="cards">
            <h2>Generate a Poetry</h2>
            <p>Let the rhythm and beauty of poetry flow! Click below to create a personalized poem.</p>
            <button className="card-button">Generate Poetry</button>
          </div>
        </section>
      </main>

      <footer className="App-footer">
        <p>&copy; 2024 Domain Expanders | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
