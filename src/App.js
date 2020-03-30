import React, {Component} from 'react';
import {connect} from 'react-redux';
import {incrementCount, decrementCount} from './actions/countActions';

import './layout/config/_base.sass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Count: {this.props.count}</h1>
        <button onClick={this.props.incrementCount}>Increment</button>
        <button onClick={this.props.decrementCount}>Decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.counter.count
  }
}

const mapDispatchToProps = {
  incrementCount,
  decrementCount
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
