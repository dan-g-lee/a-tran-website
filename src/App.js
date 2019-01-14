import React from 'react';
import SideBar from './components/side-bar'
import PhotoDisplay from './components/photo-display'
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div className="flex-box-row">
        <SideBar className="flex-item" />
        <PhotoDisplay className="flex-item" />
      </div>
    );
  }
}

export default App;
