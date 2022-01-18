import React, { Component } from 'react';
// 아래 머터리얼 스타일 설정을 삭제합니다.
// import './materialize.scss';
import './App.css';
//import InputWithStyle from './04/InputWithStyle';
//import CounterApp from './03/CounterApp';
import Counter from './03/Counter';
//import NewCounter from './03/NewCounter';
//import CounterApp from './03/CounterApp';


class CounterApp extends React.Component {
  constructor(props) {
    super(props);
    this.increaseCount = this.increaseCount.bind(this);
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    //this.resetCount = this.resetCount.bind(this);
  }
  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }
  render() {
    return (
      <div>
        <div><CounterApp count={this.state.count} onAdd={this.increaseCount}/></div>
        {/*<div><NewCounter count={this.state.count}/></div>
        <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>*/}
      </div>
    );
  }
}

export default App;
