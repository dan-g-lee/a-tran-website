import React from 'react';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';
import '../assets/css/photo-display.css'
import PhotoContainer from './photo-container';
import PhotoModal from './photo-modal';

class PhotoDisplay extends React.Component {
    /**
     * PROPS
     *      folder - folder to parse
     *      
     */
    
    constructor(props) {
        super(props);
        this.state = {
            jsx: this.generatePhotos(),
            modalTitle: "",
            modalCaption: "",
            modalPhoto: "",
            modalVisible: false
        }
        this.generatePhotos = this.generatePhotos.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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
                    onClick={() => this.handleClick("No Title.", "No Description.", this.props.photos[value])}
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

    handleClick(title, caption, value) {
        this.setState({
            modalTitle: title,
            modalCaption: caption,
            modalPhoto: value
        });
        this.toggleModal();
    }

    toggleModal() {
        this.setState(prevState => ({
            modalVisible: !prevState.modalVisible
        }));
        //Prevents the previous photo from showing up when clicking a different photo
        if(this.state.modalVisible) {
            this.setState(prevState => ({
                modalTitle: "",
                modalCaption: "",
                modalPhoto: "",
            }));
        }
    }

    /**
     * TODO:
     *      Add modal class
     *      Make an onclick that passes clicked photo to modal
     *      Toggle modal
     *          Click outside modal closes modal
     *      
     *      
     */

    render() {
        return(
            <div className="container">
                {this.state.jsx}
                <PhotoModal
                    title={this.state.modalTitle}
                    caption={this.state.modalCaption}
                    photo={this.state.modalPhoto}
                    visible={this.state.modalVisible}
                    toggleModal={this.toggleModal}
                />
            </div>
        );
    }
}

export default sizeMe()(PhotoDisplay);