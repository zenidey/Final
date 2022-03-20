const TravelList_ENDPOINT = 'https://621868501a1ba20cbaa04c74.mockapi.io/BucketList';


class BucketsApi { // this class handles all the api calls

    get = async () => { 
        try {
            const resp = await fetch(TravelList_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch(e) {
            console.log('Oops, looks like fetchBuckets had an issue.', e);
        }
    }

    post = async (bucket) => { 
        try{
            console.log(`${TravelList_ENDPOINT}`);
            const resp = await fetch(`${TravelList_ENDPOINT}/`, { 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify(bucket)

            });
            return await resp.json();
        }
        catch(e){
            console.log('Oops, looks like creating/POST buckets had an issue.');
        }
    }

    put = async (bucket) => {
        try {
            const resp = await fetch(`${TravelList_ENDPOINT}/${bucket.id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(bucket)
            });
            return await resp.json();
        } catch(e) {
            console.log('Oops, looks like updating buckets had an issue.', e);
        }
    }

    delete = async (bucket) => { 
        try {
            const resp = await fetch(`${TravelList_ENDPOINT}/${bucket.id}`, {
                method: 'DELETE',
                headers: {
                  'Content-Type': 'application/json'
                }
            });
            return await resp.json();
        } catch(e) {
            console.log('Problem deleting bucket.', e);
        }
    }

}

export const bucketsApi = new BucketsApi();
