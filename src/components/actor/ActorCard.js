import React from 'react';
// import {Link} from 'react-router-dom';

const ActorCard = ({ name, country, birthday, deathday, gender, image }) => {
    return (
        <div>
            <div>
                <img src={image} alt='actor' />
            </div>
            <h1>
                {name} {gender ? `(${gender})` : null}
            </h1>
            <p>
                {country ? `comes from ${country}` : 'No country known'}
            </p>
            <p>{birthday ? `Born ${birthday}` : null}</p>
            <p>{deathday ? `Death ${deathday}` : 'Alive'}</p>
        </div>
    )
}

export default ActorCard
