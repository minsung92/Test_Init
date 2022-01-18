import React, { Component, PureComponent } from 'react';
import { shallowEqual } from 'recompose';
import SFC from './SFC';
import Counter from './03/Counter';
import NewCounter from './03/NewCounter';
import TodaysPlanApp from './03/TodaysPlanApp';
//import ListExample from './03/ListExample';
import Todolist from './03/Todolist';
import ScrollSpy from './03/ScrollSpy';
import Counter3 from './03/Counter3';
import Input from './03/Input';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.resetCount = this.resetCount.bind(this);
  }
  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }
  render() {
    return (
        <div>
          {/*<div><Counter count={this.state.count}/></div>
          <div><NewCounter count={this.state.count}/></div>
          <button onClick={this.resetCount}>{this.state.count + 10}으로 초기화</button>
          <div><SFC/></div>
          <div><TodaysPlanApp/></div>
          <div><ListExample/></div>
          <div><Todolist/></div>*/}
          <div><Counter3/></div>
          <div><ScrollSpy/></div>
          <div><Input name="minsung"/></div>
        </div>
    );
  }
}


// class MyComponent extends React.Component {
//   componentDidUpdate() { console.log('MyComponent 새로 고침 ');}
// }
// class MyPureComponent extends React.PureComponent {
//   componentDidUpdate() { console.log('MyPureComponent 새로 고침');}
// }

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.listValue = [{ name: 'Park'},{ name: 'Lee'}];
//     this.setState({ version: 0 });
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     setTimeout(() => {
//       this.listValue[0].name = 'Justin';
//       this.setState({ version: 1 });
//     }, 100);
//     setTimeout(() => {
//       this.listValue = [{ name: 'Justin'}, {name: 'Lee'}];
//       this.setState({ version: 2 });
//     }, 200);
//   }
//   render() {
//     return (
//       <div className='body'>
//         {/* 자바스크립트의 주석과 같다 */}
//        {/* <MyComponent value={this.listValue} />
//         <MyPureComponent value={this.listValue} />*/}
//         <MyComponent></MyComponent>
//         <MyPureComponent />
//         <button onClick={this.handleClick}>버튼</button>
//       </div>
//     );
//  }
//}

export default App;
