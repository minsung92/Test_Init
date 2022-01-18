import React, { Component } from 'react';

class BooleanComponent extends Component {
    render() {
        const meassage = this.props.bored ? '놀러가자' : '하던 일 마무리하고';
        return (
            <div className='message-container'>
                {meassage}
            </div>
        );
    }
}

export default BooleanComponent;