import React, { Component } from 'react';
import './bttn.css';
import './bulma.css';
import {SubBox} from './SubBox';

export class BoxContent extends Component {
	run = {
		Start:'1',
	}
	Box = (event) =>{
		this.setState({Start: event.target.value});	
	}
	render(){
		var space = [];
		for(var i=0; i<=this.run.Start-1;i++){
			space.push(i);
		}
		return(
			<div className="box1">
              <div className="box1">
              	<h3>1st column</h3>
              	<hr />
				<p className="changes">
		            <span>Select Number </span>
		            <span className="select">
		              <select onChange={this.BoxSelect}>
		                <option value="1" defaultValue>1</option>
		                <option value="2">2</option>
		                <option value="3">3</option>
		                <option value="4">4</option>
		              </select>
		            </span>
		        </p>
		        <div className="box-image">
		            {
	          	  	 	Number.map(function(i) {
	          	  	 		return <SubBox index={i} key={i} />;
	          	  	 	})
	          	  	 }
          	  	</div>
              </div>
            </div>
		);
	}
}
