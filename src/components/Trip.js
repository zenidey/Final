import React from "react";
import { NewPlanForm } from './NewPlanForm';
import { Col} from 'react-bootstrap';



export const Trip = (props) => {

    const { trip, updateTrip} = props;

    const deleteTrip = () => {
        props.deleteTrip(trip);
    }

    const deletePlan = (plan) => {
        console.log('inside deletePlan function in Trip');
        const updatedTrip = {
            ...trip,
            plans: trip.plans.filter((x) => x !== plan) // takes in a function and whatever element passes will be added into an array
        };
        console.log(plan, 'was deleted');
        updateTrip(updatedTrip); // once a plan is deleted we need to update the trip
    }

    const addNewPlan = (plan) => {
        return updateTrip({...trip, plans: [...trip.plans, plan]})
    };

    const plans = () => (  //creating plans
        <ul>
            {trip.plans.map((plan, index) => (
                <Col className="d-flex justify-content-sm-start m-3" key={index}>
                    <button className="btn btn-sm btn-secondary m-2" onClick={(e) => deletePlan(plan)}>x</button> 
                    <h5 className="m-2">{`Experience: ${plan.experience}  , Budget: ${plan.budget}`}</h5>
                </Col>
            ))}
            
        </ul>
    );


    return (
        <div>

        <div>
            <div className="card-header text-white bg-primary">
                <Col className="d-flex justify-content-between">
                <h1>{trip.location}</h1> <button className="btn btn-sm btn-danger m-4" onClick={deleteTrip}>x delete</button>
                </Col>
                <div>
                <NewPlanForm addNewPlan={addNewPlan} />
                </div>
            </div>
            

            <div className="card border-primary mb-3 text-white">
            {plans({ plans, tripId: trip.id, deletePlan })}
            </div>
            
        </div>
        <br></br>
        </div>

    );
};

