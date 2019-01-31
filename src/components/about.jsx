import React from 'react';
import '../assets/css/about.css'
import PropTypes from 'prop-types';
import Photo from '../assets/headshot1.jpg';

export default class About extends React.Component {

    static propTypes = {

    }

    render() {
        return(
            <div className="about-container">
                <div className="about-content-shell">
                    <div className="about-grid-item1"><img className="about-photo" src={Photo} alt="Alanna Tran"/></div>
                    <div className="about-grid-item3">Alanna Tran</div>
                    <div className="about-grid-item2 about-desc">Artist and designer. Born and raised in sunny southern California, now studying at the School of the Art Institute of Chicago. Dog lover and ice cream enthusiast.</div>
                    
                </div>
            </div>
        );
    }
}