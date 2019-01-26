import React from 'react';
import SideBar from './side-bar';
import Main from './Main';
import {ROUTES} from '../utils/routes'
import '../assets/css/App.css';

class App extends React.Component {
  render() {
    return (
      <div className="flex-box-row">
        <SideBar className="flex-item" />
        <Main routes={ROUTES} />
        {/* <PhotoDisplay /> */}
      </div>
    );
  }
}

export default App;
