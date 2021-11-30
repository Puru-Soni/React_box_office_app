/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-shadow */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useCallback } from 'react'
import ShowCard from './ShowCard';
import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../styled'
import { useShows } from '../../misc/custom-hooks';

const ShowGrid = ({ data }) => {
    const [starredShows, dispatchStarred] = useShows();
    
    return (
        <FlexGrid>
            {
                data.map(({ show })=> {
                        const onStarClick = useCallback(
                        (showId, isStarred) => {
                          if (isStarred) {
                            dispatchStarred({ type: 'REMOVE', showId });
                          } else {
                            dispatchStarred({ type: 'ADD', showId });
                          }
                        },
                        [dispatchStarred]
                      ); 
                    return <ShowCard key={show.id} 
                    id={show.id} 
                    name={show.name} 
                    image = {show.image ? show.image.medium : IMAGE_NOT_FOUND } 
                    summary = {show.summary}
                    onStarClick={onStarClick}
                    isStarred={starredShows.includes(show.id)}/>  
                })
            }
        </FlexGrid>
    )
}

export default ShowGrid;