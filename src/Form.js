import React, {Component} from 'react';

export default class Form extends Component {
	render(){
		const {onSubmit, onChange, value} = this.props;
		return (
			<form className="form" onSubmit={onSubmit}>
				<input className="form-control" 
						onChange={onChange} 
						value={value}
						placeholder="Next todo.."
				/>
			</form>
		)
	}
}