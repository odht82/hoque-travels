import React, { useEffect, useState } from 'react';
import PackageCard from './PackageCard/PackageCard';
import './Packages.css';
const Packages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    console.log(packages)

    return (
        <div className="package">
            <div className="package-container">
                <div className="package-heading">
                    <div className="package-heading-text">
                        <span className="package-heading-text-head">
                            <h1 className="package-headline-under">Hoque Travel</h1><h1 className="package-headline">Tour Packages</h1>
                        </span>
                        <p className="package-desc">Get the full package experience included with all of your needs on the trips</p>
                    </div>
                </div>
                <div className="package-cards">
                    {
                        packages.map(pack => <PackageCard
                            key={pack._id}
                            pack={pack}
                        ></PackageCard>)
                    }

                </div>
            </div>
        </div >
    );
};

export default Packages;