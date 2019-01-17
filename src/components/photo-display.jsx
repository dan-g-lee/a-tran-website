import React from 'react';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import '../assets/photo-display.css'
import photo from '../assets/art-photos/dream-library.png';
import photo2 from '../assets/art-photos/derive.png';
import PhotoContainer from './photo-container';

class PhotoDisplay extends React.Component {

    items = [];

    constructor(props) {
        super(props);
        this.generateDummyItems = this.generateDummyItems.bind(this);
    }

    componentDidMount() {
        this.generateDummyItems();
    }

    generateDummyItems() {
        for(let ii = 0; ii < 10; ii++) {
            this.items.push(<PhotoContainer 
                photo={photo}
                title={"Dream Library"}
                caption={"Acrylic on canvas."}
                width={300}
                key={"key" + ii}
            />)
            //this.items.push(<div key={"key" + (ii + 1)}>Item {ii}</div>)
        }
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
                    {/* <div key="key0"><img className="thumbnail" src={photo} alt="dream-library" /></div> */}
                    {/* {this.items} */}
                </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(PhotoDisplay);