import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router';
import './Details.css';
import DetailsCard from './DetailsCard';

const Service = () => {
    const location = useLocation();
    let local = location.pathname.split('/')
    let prevPath = '/' + local[1];
    let homePrevPath = true;
    let pathPrefix = local[1];
    // console.log(prevPath);


    const { packageId, homepackageId } = useParams();
    const [packages, setPackages] = useState({});
    const [homepackages, setHomepackages] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/packages/${packageId}`)
            .then(res => res.json())
            .then(data => setPackages(data));
    }, [packageId]);
    useEffect(() => {
        fetch(`http://localhost:5000/packages/${homepackageId}`)
            .then(res => res.json())
            .then(data => setHomepackages(data));
    }, [homepackageId]);
    return (
        <>
            <div className="details">
                <div className="details-container">
                    <h2 className='details-section-heading'>
                        {pathPrefix}
                    </h2>
                    {packageId &&
                        <div className="details-list-section">
                            {<DetailsCard
                                key={packages.key}
                                details={packages}
                                prevPath={prevPath}
                                review={true}
                                special={false}
                                price={true}
                            ></DetailsCard>}
                        </div>
                    }
                    {homepackageId &&
                        <div className="details-list-section">
                            {<DetailsCard
                                key={homepackages.key}
                                details={homepackages}
                                homePrevPath={homePrevPath}
                                review={false}
                                special={true}
                                price={true}
                            ></DetailsCard>}
                        </div>
                    }
                </div>
            </div >
        </>
    );
};

export default Service;