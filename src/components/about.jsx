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
                <div className="about-education-shell about-top-spacer">
                    <div className="about-education-title">Education</div>
                    <div className="about-education-container">
                        <div className="about-education-item">
                            <img className="about-photo saic" src={ryman} alt="School of Art Institute Chicago"/>
                            <div className="about-saic">2016, Ryman Arts</div>
                        </div>
                        <div className="about-education-item">
                            <img className="about-photo saic" src={csssa} alt="California State Summer School of the Arts"/>
                            <div className="about-saic">2016, California State Summer School of the Arts</div>
                        </div>
                        <div className="about-education-item">
                            <img className="about-photo saic" src={west} alt="West Torrance High School"/>
                            <div className="about-saic">2018, West Torrance High School</div>
                        </div>
                        <div className="about-education-item">
                            <img className="about-photo saic" src={saic} alt="School of Art Institute Chicago"/>
                            <div className="about-saic">2022, School of Art Institute Chicago</div>
                        </div>
                    </div>
                </div>
                <div className="about-exhibition-shell about-top-spacer">
                    <div className="about-exhibition-title">Exhibitions</div>
                    <div className="about-exhibition-container">
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2016, Ryman Arts Student Exhibition - California African American Museum, Los Angeles, CA</div>
                        </div>
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2016, Back to School - RAWSalt Gallery, Laguna Beach, CA</div>
                        </div>
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2016, Ryman Arts Student Exhibition - The REEF, Los Angeles, CA</div>
                        </div>
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2017, May Showcase - Kansha Creamery, Torrance, CA</div>
                        </div>
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2018, West High School Student Art Show - West High School, Torrance, CA</div>
                        </div>
                    </div>
                </div>
                <div className="about-exhibition-shell about-top-spacer">
                    <div className="about-exhibition-title">Awards</div>
                    <div className="about-exhibition-container">
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2018, Congressional Art Competition 33rd District Honorable Mention</div>
                        </div>
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2018, Scholastic Art and Writing Competition Honorable Mentions and Silver Key​</div>
                        </div>
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2018, Torrance Visions of Unity Honorable Mention</div>
                        </div>
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2018, College Board #collegiance Best Photo Award</div>
                        </div>
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2018, Torrance Arts Council Award</div>
                        </div>
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2018, South Bay Watercolor Society Award</div>
                        </div>
                        <div className="about-exhibition-item">
                                <div className="about-exhibition-desc">2016, California Arts Scholar</div>
                        </div>
                    </div>
                </div>
                <div className="about-footer"></div>
            </div>
        );
    }
}