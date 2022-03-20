import React from "react";
import { Trip } from './Trip';
import { tripsApi } from "../rest/TripsApi";
import { NewTripForm } from "./NewTripForm";


export class TripList extends React.Component {

    state = {
        trips: [],
    };

    componentDidMount() { // lifecycle method, as soon as it is mounted we will fetch trips
        this.fetchTrips(); // GET data
    };

    fetchTrips = async () => {
        const trips = await tripsApi.get(); // GET data
        this.setState({ trips }); // set it to trips
    };

    createTrip = async (trip) => {  // pass in new trip
        await tripsApi.post(trip); 
        this.fetchTrips(); // update trips list (state) 
    }

    updateTrip = async (trip) => { // takes in the trip we are going to update
        await tripsApi.put(trip); 
        this.fetchTrips();  // update trips list (state) 
    };

    deleteTrip = async (trip) => { // takes in trip to delete
        await tripsApi.delete(trip);
        this.fetchTrips(); // update trips list (state) 
    }

    render() {
        return(
            <div className='container'>

                <div>
                    <NewTripForm createTrip={this.createTrip} />
                </div>

                <div>
                {this.state.trips.map((trip) => ( // Trip is an array that is a property of our state
                    <Trip
                    trip={trip}
                    key={trip.id}
                    updateTrip={this.updateTrip}
                    deleteTrip={this.deleteTrip}
                    />
                ))}
                </div>

            </div>
        )
    }
}
