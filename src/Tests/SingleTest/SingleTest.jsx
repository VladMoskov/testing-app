import React, {useEffect} from 'react';
import {getTest} from "../../Redux/single-test-reducer";

export const SingleTest = (props) => {

    useEffect(() => {
        getTest(props.id);
    }, [props.id])

        return (
            <div>
                <div>
                    <h1>{props.id}</h1>
                </div>


            </div>
        )
}

/*
<div>
    <h1>{props.name}</h1>
</div>
<div>
    <h1>{props.description}</h1>
</div>
*/
