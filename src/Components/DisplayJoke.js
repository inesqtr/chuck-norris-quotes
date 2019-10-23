import React from 'react';

const DisplayJoke = ({ joke }) => {
    return (
        <div className="DisplayJoke">
            <p>Funny Chuck says: {joke.value}</p>
        </div>
    );
};

export default DisplayJoke;