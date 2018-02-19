import React, {Component} from 'react';
import InputPreview from '../components/InputPreview';
import {connect} from 'react-redux';
import {setMessage} from '../actions/message';
import {Link} from 'react-router-dom';

class App extends Component {
 constructor (props) {
	super(props)
	this.goHome = this.goHome.bind(this)
 }
 _onChange = (value) => {
    this.props.dispatch(setMessage(value))
 }
 goHome () {
	this.props.history.goBack()
 }
 render () {
    const {message} = this.props.messageReducer;
    return (
    <div>
     <InputPreview
      value={message}
      onChange={this._onChange}/>
       <button onClick={this.goHome}>Go to table</button>
    </div>
    )
 }
}
export default connect(state => state)(App);