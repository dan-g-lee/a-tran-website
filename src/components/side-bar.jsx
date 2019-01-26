import React from 'react';
import {Link} from 'react-router-dom';
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
                        <li><Link to="/art"><div><p>ART</p></div></Link></li>
                        <li><Link to="/design"><div><p>DESIGN</p></div></Link></li>
                        <li><Link to="/figure-drawings"><div><p>FIGURE DRAWINGS</p></div></Link></li>
                        <li><Link to="/comics"><div><p>COMICS</p></div></Link></li>
                        <li><Link to="/sketchbook"><div><p>SKETCHBOOK</p></div></Link></li>
                        <li><Link to="/about"><div><p>ABOUT ME</p></div></Link></li>
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