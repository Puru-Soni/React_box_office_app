/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useShows } from '../misc/custom-hooks';

const Starred = () => {
    const [starred] = useShows();
    const [shows, setShows] = useState(null);
    const [isLoading, setIsLoding] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        if(starred && starred.length > 0){

            const promises = starred.map(showId => apiGet(`/shows/${showId}`));
            
            Promise.all(promises)
            .then(apiData => apiData.map(show => ({ show })))
            .then(results => {
                setShows(results);
                setIsLoding(false);
            })
            .catch(err => {
                setError(err.message);
                setIsLoding(false);
            })
        }
        else setIsLoding(false);
    }, [starred])

    return (
        <MainPageLayout>
            { isLoading && <div>Shows are still loading</div> }
            { error && <div>Error occured: {error}</div> }
            { !isLoading && !shows && <div>No Shows</div> }
            { !isLoading && !error && shows && <ShowGrid data={shows} /> }
        </MainPageLayout>
    )
}

export default Starred;