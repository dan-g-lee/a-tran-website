import React from 'react';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import '../assets/css/photo-display.css'
import photo from '../assets/art-photos/dream-library.png';
import photo2 from '../assets/art-photos/derive.png';
import photo3 from '../assets/art-photos/seated-self.png';
import photo4 from '../assets/art-photos/sticks.png';
import PhotoContainer from './photo-container';

class PhotoDisplay extends React.Component {

    images = {};
    items = [];

    constructor(props) {
        super(props);
        this.state = {
            images: {}
        }
        this.init = this.init.bind(this);
        this.generateDummyItems = this.generateDummyItems.bind(this);
        this.parseKeys = this.parseKeys.bind(this);        
    }
    
    init() {
        this.parseKeys();
        this.generateDummyItems();
    }

    componentDidMount() {
        this.init();
    }

    importPhotos(r) {
        let images = {}
        r.keys().forEach((item, index) => { images[index] = r(item); });
        return images;
    }

    parseKeys() {
        this.images = this.importPhotos(require.context('../assets/art-photos/', false, /\.(png|jpe?g|svg)$/));
        console.log(this.images);
    }

    generateDummyItems() {
        for(let ii = 0; ii < 10; ii++) {
            this.items.push(<PhotoContainer 
                photo={photo}
                title={"Dream Library"}
                caption={"Acrylic on canvas."}
                width={300}
                id={"key" + ii}
            />)
            //this.items.push(<div key={"key" + (ii + 1)}>Item {ii}</div>)
        }
    }

    generateContainers() {
        let renderable = [];

    }

    render() {
        return(
            <div className="container">
                <StackGrid 
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
                    {/* <div key="key0"><img className="thumbnail" src={photo} alt="dream-library" /></div> */}
                    {/* {this.items} */}
                </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(PhotoDisplay);