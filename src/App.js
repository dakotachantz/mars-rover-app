import React, { Component } from 'react';
import './styles/App.css';
import GetImageForm from './components/GetImageForm';
import GetImageButton from './components/GetImageButton';
import ImageDisplay from './components/ImageDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <GetImageForm />
        <GetImageButton />
        <ImageDisplay />
      </div>
    );
  }
}

export default App;
