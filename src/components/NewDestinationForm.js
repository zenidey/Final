import React, { useState } from "react";

export const NewDestinationForm = (props) => {
    const [name, setName] = useState('');
    const[experience, setExperience] = useState('');
    const[date, setDate] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (name && experience) {
            console.log('New Destination Name: ' + name + experience);
            props.addNewDestination({name, experience, date});
            setName('');
            setExperience('');
            setDate('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <div className="card text-white bg-primary my-5">
			<div className="text-center mt-4">
			<h1>My bucket list</h1>
			</div>

			<div className="card-body text-center">
            <form className="d-flex align-items-end" onSubmit={onSubmit}>
                <input
                className="form-control form-control-sm m-1" type="text" placeholder=".form-control-sm" id="inputSmall"
                type='text'
                placeholder='destination'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
                <input
                className="form-control form-control-sm m-1" type="text" placeholder=".form-control-sm" id="inputSmall"
                type='text'
                placeholder='experience'
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                />
                <input
                className="form-control form-control-sm m-1" type="text" placeholder=".form-control-sm" id="inputSmall"
                type='text'
                placeholder='date'
                onChange={(e) => setDate(e.target.value)}
                value={date}
                />
                <button className='btn btn-success btn-sm m-1' type='submit'>+</button>
            </form>
			
			</div>
			<br></br>
			</div>
        </div>
    )
}