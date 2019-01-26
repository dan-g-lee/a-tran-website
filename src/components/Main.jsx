import React from 'react';
import {Switch, Route} from 'react-router-dom';
import PhotoDisplay from './photo-display';
import '../assets/css/main.css'

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.generateRoutes = this.generateRoutes.bind(this);
    }

    generateRoutes() {
        let routes = [];
        let keys = Object.keys(this.props.routes);
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
            else
                routes.push(<Route key={index} path={this.props.routes[value].route} render={(props) => (
                    <PhotoDisplay
                        {...props}
                        folder={this.props.routes[value].folder}
                        hasPhotos={this.props.routes[value].hasPhotos}
                    />
                )}/>);
        });
        /*for(let key in keys) {
            console.log("KEY", key);
            if(key === 'home' || key === 'about')
                routes.push(<Route exact path={this.props.routes[key].route} component={<div></div>} />)
            else
                routes.push(<Route path={this.props.routes[key].route} render={() => (
                    <PhotoDisplay folder={this.props.routes[key].folder} />
                )}/>);
        }*/
        console.log(routes);
        return routes;
    }

    render() {
        return(
            <main>
                <Switch>
                    {/* <Route key={0} path={this.props.routes['home'].route} render={(props) => (
                        <PhotoDisplay
                            {...props}
                            folder={this.props.routes['home'].folder}
                            hasPhotos={this.props.routes['home'].hasPhotos}
                        />
                    )}/>
                    <Route key={1} path={this.props.routes['art'].route} render={(props) => (
                        <PhotoDisplay
                            {...props}
                            folder={this.props.routes['art'].folder}
                            hasPhotos={this.props.routes['art'].hasPhotos}
                        />
                    )}/>
                    <Route key={2} path={this.props.routes['figure'].route} render={(props) => (
                        <PhotoDisplay
                            {...props}
                            folder={this.props.routes['figure'].folder}
                            hasPhotos={this.props.routes['figure'].hasPhotos}
                        />
                    )}/>
                    <Route key={3} path={this.props.routes['comics'].route} render={(props) => (
                        <PhotoDisplay
                            {...props}
                            folder={this.props.routes['comics'].folder}
                            hasPhotos={this.props.routes['comics'].hasPhotos}
                        />
                    )}/>
                    <Route key={4} path={this.props.routes['sketch'].route} render={(props) => (
                        <PhotoDisplay
                            {...props}
                            folder={this.props.routes['sketch'].folder}
                            hasPhotos={this.props.routes['sketch'].hasPhotos}
                        />
                    )}/>
                    <Route key={5} path={this.props.routes['about'].route} render={(props) => (
                        <PhotoDisplay
                            {...props}
                            folder={this.props.routes['about'].folder}
                            hasPhotos={this.props.routes['about'].hasPhotos}
                        />
                    )}/> */}
                    {this.generateRoutes()}
                </Switch>
            </main>
        );
    }
}

export default Main;