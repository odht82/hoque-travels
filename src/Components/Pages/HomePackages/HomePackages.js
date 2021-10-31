import React, { useEffect, useState } from 'react';
import HomePackageCard from './HomePackageCard/HomePackageCard';
import './HomePackages.css';
import { Link, NavLink } from 'react-router-dom';
const HomePackages = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [])
    console.log(packages)

    return (
        <div className="home-pckg">
            <div className="home-pckg-container">
                <div className="home-pckg-heading">
                    <div className="home-pckg-heading-text">
                        <span className="home-pckg-heading-text-head">
                            <h1 className="home-pckg-headline-under">Hoque Travel</h1><h1 className="home-pckg-headline">Tour Packages</h1>
                        </span>
                        <p className="home-pckg-desc">Get the full home-home-pckg experience included with all of your needs on the trips</p>
                    </div>
                    <NavLink to='/packages'>
                        <button className="all-home-pckg-btn">View Packages</button>
                    </NavLink>
                </div>
                <div className="home-pckg-cards">
                    {
                        packages.slice(-6).map(pack => <HomePackageCard
                            key={pack._id}
                            pack={pack}
                        ></HomePackageCard>)
                    }

                </div>
            </div>
        </div >
    );
};

export default HomePackages;