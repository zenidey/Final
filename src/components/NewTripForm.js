import React, {useState} from 'react';

export const NewTripForm = (props) => {
	const[location, setLocation] = useState('');
	

	const onSubmit = (e) => {
		console.log('inside NewTripForm');
		e.preventDefault();

		if (location){
		console.log('New Trip Experience: ' + location);
		console.log('props: ', props);
		props.createTrip({location});
        setLocation('');

		} 
		else{
			console.log('invalid input');
		}
	};

	return(
		<div className="card text-white bg-success my-5">
			<div className="text-center mt-4">
			<h1>Start budgeting for future trips here</h1>
			</div>

			<div className="card-body text-center border-round">
			<form onSubmit={onSubmit}>
				<input
					className="form-control form-control-lg" type="text" placeholder=".form-control-lg" 
					type='text'
					placeholder='enter future trip'
					onChange={(e) => setLocation(e.target.value)}
					value={location}
				/>
				<button className="btn btn-primary m-3" type='submit' value='submit'>add trip</button>
				</form>
			</div>
			<br></br>

			</div>
	)
};

