import React from 'react';
import '../assets/css/photo-container.css'
import PropTypes from 'prop-types';

export default class PhotoContainer extends React.Component {

    static propTypes = {
        photo: PropTypes.string,
        title: PropTypes.string,
        caption: PropTypes.string,
        width: PropTypes.number,
        id: PropTypes.string
    }

    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div key={this.props.id} className="photo-container-shell" onClick={() => this.props.onClick()}>
                <div><img className="photo-container-img" src={this.props.photo} alt={this.props.title}/></div>
                <div className="photo-container-text">
                    <h2>{this.props.title}</h2>
                    <p>{this.props.caption}</p>
                </div>
            </div>
        );
    }
}