import React from 'react';
// import {Link} from 'react-router-dom';
import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ name, country, birthday, deathday, gender, image }) => {
    return (
        <StyledActorCard>
            <div className="img-wrapper">
                <img src={image} alt='actor' />
            </div>
            <h1>
                {name} {gender ? `(${gender})` : null}
            </h1>
            <p>
                {country ? `comes from ${country}` : 'No country known'}
            </p>
            <p>{birthday ? `Born ${birthday}` : null}</p>
            <p className="deathday" >{deathday ? `Death ${deathday}` : 'Alive'}</p> 
        </StyledActorCard>
    )
}

export default ActorCard
