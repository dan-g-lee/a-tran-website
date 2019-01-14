import React from 'react';
import '../assets/side-bar.css';
import Photo from '../assets/headshot1.jpg';
import SVGIcon from './svg-icons'

export default class SideBar extends React.Component {
    render() {
        return(
            <div className="side-bar flex-box-vert">
                <img className="photo flex-box-item" src={Photo} alt="Alanna Tran"/>
                <div className="photo-title flex-box-item"><h2>Alanna Tran</h2></div>
                <div className="links flex-box-item">
                    <SVGIcon 
                        name="linkedin"
                        width="24"
                        height="24"
                        link="https://www.linkedin.com/in/alanna-tran/"
                    />
                    <SVGIcon 
                        name="tumblr"
                        width="24"
                        height="24"
                        link="https://chewytran.tumblr.com"
                    />
                    <SVGIcon 
                        name="instagram"
                        width="24"
                        height="24"
                        link="https://www.instagram.com/tran.arts/"
                    />
                </div>
                <div className="nav flex-box-item">
                    <ul>
                        <li><a href="#Art">Art</a></li>
                        <li><a href="#Design">Design</a></li>
                        <li><a href="#FigureDrawings">Figure Drawings</a></li>
                        <li><a href="#Comics">Comics</a></li>
                        <li><a href="#Sketchbook">Sketchbook</a></li>
                        <li><a href="#About">About Me</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}