import React, {useState, useEffect} from 'react';
import jsonplaceholder from '../api/jsonPlaceholder';

export const useResources = (path) => {    
    const [resources, setResources] = useState('');
    useEffect(() => {
        try {
        (async (path) => {
            const response = await jsonPlaceholder.get(path);
        })(path);
    }catch (err) {
        console.log(`err: `, err);
    }

    }, [path]);

    
    return resources;
};