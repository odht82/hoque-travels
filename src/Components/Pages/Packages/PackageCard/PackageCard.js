import React from 'react';
import './PackageCard.css';

const PackageCard = (props) => {
    const { _id, place, name, activities, places, duration, price, pricetype, image } = props.pack;
    return (
        <div className="package-card">
            <div className="package-card-img">
                <img src={image} alt="" />
            </div>
            <div className="package-card-text">
                <h3 className="package-card-heading">Beach Activity</h3>
                <p className="package-card-properties">124 Properties</p>
            </div>
        </div>
    );
};

export default PackageCard;
