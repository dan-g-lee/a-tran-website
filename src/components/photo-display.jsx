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
    images = {};
    items = [];
    
    constructor(props) {
        super(props);
        this.state = {
            images: {}
        }
        this.init = this.init.bind(this);
        this.parseKeys = this.parseKeys.bind(this);
        this.generatePhotos = this.generatePhotos.bind(this);  
    }
    
    init() {
        
    }

    componentDidMount() {
        this.init();
    }

    importPhotos(r) {
        let images = {}
        r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }
    /**
     * 
     * 
     * Webpack doesn't allow expressions being used in require.context. :(
     */
    parseKeys() {
        if(this.props.hasPhotos === false) return;
        let folder = '../assets' + this.props.folder;
        console.log("[FOLDER]: ", folder)
        this.images = this.importPhotos(require.context('../assets/art-photos', true, /\.(png|jpe?g|svg)$/));
    }

    generatePhotos() {
        let photos = [];
        let keys = Object.keys(this.images);
        if(keys.length === 0) return null;
        keys.forEach((value, index) => {
            photos.push(
                <PhotoContainer 
                    photo={this.images[value]}
                    title={"No Title."}
                    caption={"No Description."}
                    width={300}
                    key={index}
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
        //console.log("I AM IN RENDER OF PHOTO DISPLAY, HERE IS MY FOLDER: ", this.props.folder);
        this.parseKeys();
        console.log(this.images);
        return(
            <div className="container">
                {this.generatePhotos()}
                {/* <StackGrid 
                    columnWidth={300}
                    monitorImagesLoaded={true}
                    gutterWidth={10}
                    gutterHeight={10}
                >
                    <PhotoContainer 
                        photo={photo}
                        title={"Dream Library"}
                        caption={"Acrylic on canvas."}
                        width={300}
                        key={"key0"}
                    />
                    <PhotoContainer 
                        photo={photo2}
                        title={"D\u00e9rive"}
                        caption={"Acrylic on canvas, maps glued onto canvas."}
                        width={300}
                        key={"key1"}
                    />
                    <PhotoContainer 
                        photo={photo3}
                        title={"Seated Self"}
                        caption={"Watercolor and colored pencil on paper."}
                        width={300}
                        key={"key2"}
                    />
                    <PhotoContainer 
                        photo={photo4}
                        title={"Sticks"}
                        caption={"Pastel and charcoal on toned paper."}
                        width={300}
                        key={"key3"}
                    />
                </StackGrid> */}
            </div>
        );
    }
}

export default sizeMe()(PhotoDisplay);