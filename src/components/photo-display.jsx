import React from 'react';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import '../assets/css/photo-display.css'
import PhotoContainer from './photo-container';

class PhotoDisplay extends React.Component {
    /**
     * PROPS
     *      folder - folder to parse
     *      
     */
    
    constructor(props) {
        super(props);
        this.state = {
            jsx: this.generatePhotos()
        }
        this.generatePhotos = this.generatePhotos.bind(this);  
    }

    /**
     * Generates the StackGrid and Containers for photos
     */
    generatePhotos() {
        if(!this.props.hasPhotos) return;
        
        let photos = [];
        let keys = Object.keys(this.props.photos);
        keys.forEach((value, index) => {
            photos.push(
                <PhotoContainer 
                    photo={this.props.photos[value]}
                    title={"No Title."}
                    caption={"No Description."}
                    width={300}
                    key={value}
                />
            );
        })
        return (
            <StackGrid 
                columnWidth={300}
                monitorImagesLoaded={true}
                gutterWidth={10}
                gutterHeight={10}
            >
                {photos}
            </StackGrid>
        );
    }

    render() {
        return(
            <div className="container">
                {this.state.jsx}
            </div>
        );
    }
}

export default sizeMe()(PhotoDisplay);