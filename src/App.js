import React, { Component } from 'react';
import './styles/App.css';
import space from './img/space.jpg';
import GetImageForm from './components/GetImageForm';

const styles = {
  header: {
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  app: {
    height: '100vh',
    backgroundSize: 'cover',
    backgroundImage: `url(${space})`,
  }
}

class App extends Component {
  render() {
    return (
      <div className="main" style={styles.app}>
        <header style={styles.header}>
        <h1 style={{margin: 0, fontFamily: "'Audiowide', 'cursive'"}}>Mars Rover App</h1>
        </header>
        <GetImageForm />
      </div>
    );
  }
}

export default App;
