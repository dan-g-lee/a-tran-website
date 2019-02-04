import React from 'react';
import '../assets/css/about.css'
//import PropTypes from 'prop-types';
import Photo from '../assets/logos/headshot1.jpg';
import saic from '../assets/logos/saic_logo2.png';
import ryman from '../assets/logos/ryman_logo.png';
import west from '../assets/logos/westhigh_logo.png';
import csssa from '../assets/logos/csssa_logo.png';

export default class About extends React.Component {

    /*static propTypes = {

    }*/

    render() {
        return(
            <div className="about-container">
                <div className="about-photo-container">
                    <img className="about-photo" src={Photo} alt="Alanna Tran"/>
                    <div className="about-name">Alanna Tran</div>
                </div>
                <div className="about-education-container">
                    <div className="about-saic-container about-education-item">
                        <img className="about-photo saic" src={ryman} alt="School of Art Institute Chicago"/>
                        <div className="about-saic">2016, Ryman Arts</div>
                    </div>
                    <div className="about-saic-container about-education-item">
                        <img className="about-photo saic" src={csssa} alt="California State Summer School of the Arts"/>
                        <div className="about-saic">2016, California State Summer School of the Arts</div>
                    </div>
                    <div className="about-saic-container about-education-item">
                        <img className="about-photo saic" src={west} alt="West Torrance High School"/>
                        <div className="about-saic">2018, West Torrance High School</div>
                    </div>
                    <div className="about-saic-container about-education-item">
                        <img className="about-photo saic" src={saic} alt="School of Art Institute Chicago"/>
                        <div className="about-saic">2022, School of Art Institute Chicago</div>
                    </div>
                </div>
                
                {/* <div className="about-content-shell">
                    <div className="about-grid-item1">
                        <div className="about-photo-container">
                            <img className="about-photo" src={Photo} alt="Alanna Tran"/>
                            <div>Alanna Tran</div>
                        </div>
                    </div>
                    <div className="about-grid-item3">Alanna Tran</div>
                    <div className="about-grid-item2 about-desc">Artist and designer. Born and raised in sunny southern California, now studying at the School of the Art Institute of Chicago. Dog lover and ice cream enthusiast.</div>
                    
                </div> */}
            </div>
        );
    }
}