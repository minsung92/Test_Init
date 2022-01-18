import React, { Component } from 'react';

class ForceUpdateExample extends Component {
    constructor(props) {
        super(props);

        this.loading = true;
        this.formData = 'no data';

        this.handaleData = this.handaleData.bind(this);

        setTimeout(this.handaleData, 4000);
    }
    handaleData() {
        const data = 'new data';

        this.loading = false;
        this.formData = data + this.formData;
        this.forceUpdate();
    }
    render() {
        return (
            <div>
                <span>loading: {String(this.loading)}</span>
                <span>결과: {this.formData}</span>  
            </div>
        );
    }
}

export default ForceUpdateExample;