import React from "react";
import { NewDestinationForm } from './NewDestinationForm';
import { Table} from 'react-bootstrap';


export const Bucket = (props) => {

    const { bucket, updateBucket} = props;

    const deleteDestination = (destination) => {
        console.log('inside deleteDestination function in Bucket');
        const updatedBucket = {
            ...bucket,
            destinations: bucket.destinations.filter((x) => x !== destination) 
        };
        console.log(destination, 'was deleted');
        updateBucket(updatedBucket);
    }

    const addNewDestination = (destination) => {
        console.log('inside addNewDestination in Bucket.js');
		console.log('destination.name is: ' + destination.name);
		console.log('destination.experience is ' + destination.experience);
        return updateBucket({...bucket, destinations: [...bucket.destinations, destination]})
    };

    const destinations = () => (  
        <ul>
            <h1 className="my-3 p-2">One day I will travel to . . .</h1>
            {bucket.destinations.map((destination, index) => (
                <Table className="text-white" key={index}>
                    <tbody>
                    <tr>
                        <td><button className="btn btn-danger btn-sm" onClick={(e) => deleteDestination(destination)}>delete</button> </td>
                        <td>{`Destination:  ${destination.name}`}</td>
                        <td>{`Experience:  ${destination.experience}`}</td>
                        <td>{`Date Added:  ${destination.date}`}</td>
                    </tr>
                    </tbody>
                </Table>
            ))}
        </ul>
    );

    return (
        <div>

        <div>
            <div className="text-white">
                <NewDestinationForm addNewDestination={addNewDestination} />
            </div>

            <div className="card-body text-white">
            {
                destinations({ destinations, bucketId: bucket.id, deleteDestination })
            }
            </div>
        </div>
        <br></br>
        </div>

    );
};