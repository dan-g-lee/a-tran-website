import React from 'react';
import PropType from 'prop-types';
import '../assets/css/photo-modal.css'

class PhotoModal extends React.Component {
    
    static propTypes = {
        photo: PropType.string,
        title: PropType.string,
        caption: PropType.string,
        toggleModal: PropType.func
    }
    
    /**
     * PROPS
     *      photo
     *      title
     *      caption
     *      toggleModal
     */
    

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
            <div className="modal-container">
                <img className="modal-image" src={this.props.photo} alt={this.props.title}/>
            </div>
        );
    }
}

export default PhotoModal;