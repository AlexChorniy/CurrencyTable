import React from 'react';

export default ({ name, value }) => {
    return (
        <div className="list-item">
            <div className="list-item-name">{name}</div>
            <div className="list-item-value">{value}</div>
        </div>
    )
}