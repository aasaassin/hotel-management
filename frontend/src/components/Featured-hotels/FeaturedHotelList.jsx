import React from 'react';
import HotelCard from '../../Shared/HotelCard';

import { Col } from 'reactstrap';
import useFetch from '../../hooks/useFetch.js';
import { BASE_URL } from './../../utils/config.js';

const FeaturedHotelList = () => {
    const { data: featuredHotels, error, loading } = useFetch(`${BASE_URL}/hotels/search/getFeaturedHotel`);

    return (
        <>
            {loading && <h4>Loading..............</h4>}
            {error && <h4>{error}</h4>}
            {!loading &&
                !error &&
                featuredHotels?.map((hotel) => (
                    <Col lg="3" className="mb-4" key={hotel._id}>
                        <HotelCard hotel={hotel} />
                    </Col>
                ))}
        </>
    );
};

export default FeaturedHotelList;
