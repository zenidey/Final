import React from "react";
import { Bucket } from './Bucket';
import { bucketsApi } from "../rest/BucketsApi";

export class BucketList extends React.Component {

    state = {
        buckets: [],
    };

    componentDidMount() {
        this.fetchBuckets();
    };

    fetchBuckets = async () => {
        const buckets = await bucketsApi.get();
        this.setState({ buckets });
    };

    createBucket = async (bucket) => {
        await bucketsApi.post(bucket);
        this.fetchBuckets();
    }

    updateBucket = async (bucket) => {
        await bucketsApi.put(bucket);
        this.fetchBuckets();
    };

    deleteBucket = async (bucket) => {
        await bucketsApi.delete(bucket);
        this.fetchBuckets();
    }

    render() {
        return(
            <div className="container">
                <div>
                {this.state.buckets.map((bucket) => (
                    <Bucket
                    bucket={bucket}
                    key={bucket.id}
                    updateBucket={this.updateBucket}
                    deleteBucket={this.deleteBucket}
                    />
                ))}
                </div>
            </div>
        )
    }
}
