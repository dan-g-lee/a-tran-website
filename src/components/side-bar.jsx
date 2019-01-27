import React from 'react';
import {NavLink} from 'react-router-dom';
import '../assets/css/side-bar.css';
import Photo from '../assets/headshot1.jpg';
import SVGIcon from './svg-icons'

export default class SideBar extends React.Component {
    render() {
        return(
            <div className="side-bar flex-box-vert">
                <img className="photo flex-box-item" src={Photo} alt="Alanna Tran"/>
                <div className="photo-title flex-box-item"><h2>ALANNA TRAN</h2></div>
                <div className="flex-box-item line"></div>
                <div className="photo-subtitle flex-box-item">artist and designer</div>
                <div className="nav flex-box-item">
                    <ul>
                        <li><NavLink to="/art" activeClassName="selected"><div><p>ART</p></div></NavLink></li>
                        <li><NavLink to="/design" activeClassName="selected"><div><p>DESIGN</p></div></NavLink></li>
                        <li><NavLink to="/figure-drawings" activeClassName="selected"><div><p>FIGURE DRAWINGS</p></div></NavLink></li>
                        <li><NavLink to="/comics" activeClassName="selected"><div><p>COMICS</p></div></NavLink></li>
                        <li><NavLink to="/sketchbook" activeClassName="selected"><div><p>SKETCHBOOK</p></div></NavLink></li>
                        <li><NavLink to="/about" activeClassName="selected"><div><p>ABOUT ME</p></div></NavLink></li>
                    </ul>
                </div>
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
                {/* <div className="flex-box-item credits">
                    <p>
                        Made by <a href="https://danielglee.me" target="_blank" rel="noopener noreferrer">Daniel Lee</a>
                    </p>
                </div> */}
            </div>
        );
    }
}