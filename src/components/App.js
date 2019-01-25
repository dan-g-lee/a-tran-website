import React from 'react';
import SideBar from './side-bar'
import PhotoDisplay from './photo-display'
import './assets/css/App.css'

class App extends React.Component {
  render() {
    return (
      <div className="flex-box-row">
        <SideBar className="flex-item" />
        <PhotoDisplay />
      </div>
    );
  }
}

export default App;
