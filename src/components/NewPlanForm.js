import React, { useState } from "react";

export const NewPlanForm = (props) => {
    const [experience, setExperience] = useState('');
    const[budget, setArea] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        if (experience && budget) { // if experience and budget have a value this will be true
            console.log('New Plan Experience: ' + experience + budget);
            props.addNewPlan({experience, budget});
            setExperience('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4></h4>
            <form className="d-flex align-items-end" onSubmit={onSubmit}>
                <input
                className="form-control form-control-sm m-2" type="text" placeholder=".form-control-sm" id="inputSmall"
                type='text'
                placeholder='experience'
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                />
                <input
                className="form-control form-control-sm m-2" type="text" placeholder=".form-control-sm" id="inputSmall"
                type='text'
                placeholder='budget'
                onChange={(e) => setArea(e.target.value)}
                value={budget}
                />
                <button className='btn btn-success btn-sm m-2' type='submit'>+</button>
            </form>
        </div>
    )
}