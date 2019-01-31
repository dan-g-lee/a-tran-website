import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PhotoDisplay from './photo-display';
import About from './about';
import '../assets/css/main.css'

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            jsx: this.generateRoutes(),
            keys: Object.keys(this.props.routes)
        }
        this.generateRoutes = this.generateRoutes.bind(this);
        this.separatePhotos = this.separatePhotos.bind(this);
        this.separatePhotos();
    }

    /**
     * From a list of key/val pairs of photos, separates according to folder structure
     */
    separatePhotos() {
        let routekeys = Object.keys(this.props.routes);
        let photoKeys = Object.keys(this.props.photos);
        let sorted = {};
        routekeys.forEach((route) => {
            let routeData = this.props.routes[route];
            if(routeData.hasPhotos) {
                //Filter checks whether key contains the folder of the current route, ie art/,
                //then reduces all correct keys and values into a new object
                sorted = {
                    ...sorted,
                    [route]: photoKeys.filter((k) => { return k.indexOf(routeData.folder) === 0; })
                             .reduce((photos, k) => { photos[k] = this.props.photos[k]; return photos }, {})
                };
            }
        });
        return sorted;
    }

    generateRoutes() {
        let routes = [];
        let keys = Object.keys(this.props.routes);
        let sorted = this.separatePhotos();
        console.log("[KEYS]: ", keys);
        keys.forEach((value, index) => {
            console.log("KEY", value);
            console.log(this.props.routes[value].folder);
            if(value === 'home')
                routes.push(<Route key={index} exact path={this.props.routes[value].route} render={(props) => (
                    <PhotoDisplay
                        {...props}
                        folder={this.props.routes[value].folder}
                        hasPhotos={this.props.routes[value].hasPhotos}
                    />
                )}/>);
            else if(value === 'about')
                routes.push(<Route key={index} path={this.props.routes[value].route} render={(props) => (
                   <About />
                )}/>);
            else
                routes.push(<Route key={index} path={this.props.routes[value].route} render={(props) => (
                    <PhotoDisplay
                        {...props}
                        folder={this.props.routes[value].folder}
                        hasPhotos={this.props.routes[value].hasPhotos}
                        photos={sorted[value]}
                    />
                )}/>);
        });
        console.log(routes);
        return routes;
    }

    render() {
        return(
            <main>
                <Switch>
                    {this.state.jsx}
                </Switch>
            </main>
        );
    }
}

export default Main;