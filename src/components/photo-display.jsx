import React from 'react';
import sizeMe from 'react-sizeme';
import StackGrid from 'react-stack-grid';

class PhotoDisplay extends React.Component {
    render() {
        return(
            <StackGrid 
                columnWidth={150}>
                <div key="key1">Item 1</div>    
            </StackGrid>
        );
    }
}

export default sizeMe()(PhotoDisplay);