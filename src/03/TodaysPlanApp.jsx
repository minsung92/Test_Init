import React from 'react';
import TodaysPlan from './TodaysPlan';

class TodaysPlanApp extends React.Component {
    render() {
        const { onButtonClick, hasPlan } = this.props;
        return (
            <div className='boby'>
                {hasPlan ? <TodaysPlan /> : null}
                <button onClick={onButtonClick}>
                    계획 없음
                </button>
            </div>
        );
    }
}

export default TodaysPlanApp;