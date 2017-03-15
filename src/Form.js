import React, {Component} from 'react';

export default class Form extends Component {
	render(){
		const {onSubmit, onChange, value} = this.props;
		return (
			<form className="form" onSubmit={onSubmit}>
				<div className="input-group">
					<input className="form-control" 
						onChange={onChange} 
						value={value}
						placeholder="Next todo.."
					/>
					<div className="input-group-btn">
						<button className="btn btn-default" type="submit" value="Submit">submit</button>
					</div>
				</div>
			</form>
		)
	}
}