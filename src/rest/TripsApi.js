const TravelList_ENDPOINT = 'https://621868501a1ba20cbaa04c74.mockapi.io/TravelList';


class TripsApi { // this class handles all the api calls

    get = async () => { 
        try {
            const resp = await fetch(TravelList_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oops, looks like fetchTrips had an issue.', e);
        }
    }

    post = async (trip) => { 
        try{
            console.log(`${TravelList_ENDPOINT}`);
            const resp = await fetch(`${TravelList_ENDPOINT}/`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(trip)

            });
            return await resp.json();
        }
        catch(e){
            console.log('Oops, looks like creating/POST trips had an issue.');
        }
    }

    put = async (trip) => {
        try {
            const resp = await fetch(`${TravelList_ENDPOINT}/${trip.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(trip)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating trips had an issue.', e);
        }
    }

    delete = async (trip) => { 
        try {
            const resp = await fetch(`${TravelList_ENDPOINT}/${trip.id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                } 
            });
            return await resp.json();
        } catch(e) {
            console.log('Problem deleting trip.', e);
        }
    }

}

export const tripsApi = new TripsApi();

