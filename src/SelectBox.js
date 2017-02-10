import React, { Component } from 'react';
import './bttn.css';
import './bulma.css';
import {BoxContent} from './BoxContent';

export class SelectBox extends Component {

	state = {
		col:'4',
	}
	handleChangeBox = (event) =>{
		this.setState({col: event.target.value});	
	}
	render() {
		var selectBox = [];
		for(var i=0; i<=this.state.col-1;i++){
			selectBox.push(i);
		}

	    return (
	    	<div className="container has-text-centered">
	          <p className="control">
	            <span>Select Number </span>
	            <span className="select">
	              <select onChange={this.handleChangeBox}>
	                <option value="1">1</option>
	                <option value="2">2</option>
	                <option value="3">3</option>
	                <option value="4" selected>4</option>
	              </select>
	            </span>
	          </p>
	          <div className="clearfix"></div>
	          <div className="columns">
	            {
          	  	 	selectBox.map(function(i) {
          	  	 		return <BoxContent index={i} key={i} />;
          	  	 	})
          	  	 }
          	  </div>
	        </div>
	    );
  	}
}


