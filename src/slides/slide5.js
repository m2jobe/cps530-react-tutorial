import React from 'react'
import store from '../store'

export default class Slide5 extends React.Component {

  componentDidMount() {
    this.timer = setInterval( (() => {
      this.tick();
    }), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  tick() {
    store.dispatch({type: 'tick', offset: 1})
  }

  render() {
    return(
      <div className='title slide'>
        <h1>{this.props.count} <img className={this.props.count % 2 == 0 ? "redux-logo" : "hide"} src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png" /></h1>
      </div>
    );
  }

}
