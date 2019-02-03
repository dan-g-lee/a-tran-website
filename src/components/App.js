import React from 'react';
import SideBar from './side-bar';
import Main from './Main';
import {ROUTES} from '../utils/routes';
import PHOTOS from '../utils/photo-import';
import INFO from '../utils/file-import';
import '../assets/css/App.css';

class App extends React.Component {
    render() {
        return (
            <div className="flex-box-row">
                <SideBar className="flex-item" />
                <Main
                    routes={ROUTES}
                    photos={PHOTOS}
                    info={INFO}
                />
            </div>
        );
    }
}

export default App;
