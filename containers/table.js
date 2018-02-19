import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTabledata} from '../actions/tabledata';
import {setLastItem} from '../actions/lastitem';
import {Link} from 'react-router-dom';

class Table extends React.Component {

	constructor (props) {
		super(props)
		this.addMoreData = this.addMoreData.bind(this)
		this.addFourData = this.addFourData.bind(this)
		this.state = {
			lastItem: props.lastItem
		}

		this.testCss = {
			main: {
				marginTop: '100px'
			},
			footer: {
				position: 'fixed',
			    left: 0,
			    bottom: 0,
			    width: '100%',
			    backgroundColor: 'red',
			    color: 'white',
			    textAlign: 'center'
			},
			navBar: {
				overflow: 'hidden',
				height: '100px',
			    backgroundColor: '#333',
			    position: 'fixed',
			    top: 0,
			    width: '100%'
			}
		}
		
	}

	addFourData () {
		var data = []
		for (let i = 0; i < 20; i++) {
			this.state.lastItem++
			data.push({name: this.state.lastItem})
		}
		return data
	}

	addMoreData (data) {
		this.props.dispatch(setTabledata(this.addFourData()))
		this.props.dispatch(setLastItem(this.state.lastItem))
	}

	render () {
		console.log(this.props)
		const data = this.props.tabledata;
		return (
			<div>
				<div style={this.testCss.navBar}>
					<h1>Hleel</h1>
				</div>
				<div style={this.testCss.main}>
					<Link to='/'>
	        			<button>Go to Home</button>
	        		</Link>
					<button onClick={this.addMoreData}>Add more data</button>	
					<ul>
						{data.map((data, i) => {
							return (
								<li key={i}>
									<Link to='/'>
					        			<button>{data.name}</button>
					        		</Link>
	        					</li>
	        				)	
						})}
					</ul>
				</div>
				<div style={this.testCss.footer}>
				  <p>Footer</p>
				</div>
			</div>
			
		)
	}
}

function mapStateToProps (state) {
    return {
        tabledata: state.tabledataReducer.tabledata,
        lastItem: state.lastItemReducer.lastItem
    }
}


export default connect(mapStateToProps)(Table);