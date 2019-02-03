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
        console.log("VISIBLE?", this.props.visible)
        return(
            <div className={this.props.visible ? "modal-container" : "modal-container invisible"}>
                {/* <div className="modal-close">&#10006;</div> */}
                <div className="modal-content-wrapper">
                    <div className="modal-content-center">
                        <div className="x modal-close" onClick={() => this.props.toggleModal()}><b></b><b></b><b></b><b></b></div>
                        <img className="modal-image" src={this.props.photo} alt={this.props.title}/>
                        <div className="modal-text-area">
                            <div className="modal-author-info"><b>Alanna Tran</b> (b. 2000)</div>
                            <div className="modal-title">{this.props.title} {this.props.year}</div>
                            <div className="modal-caption">{this.props.caption}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoModal;