import React from 'react';

const SingleCosmetic = ({cosmetic}) => {
    return (
        <div>
            <h2>Name: {cosmetic.name} & price: {cosmetic.balance}</h2>
        </div>
    );
};

export default SingleCosmetic;