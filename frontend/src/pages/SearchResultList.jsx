import React, { useState } from 'react';

import CommonSection from './../Shared/CommonSection';
import { Container, Row, Col } from 'reactstrap';

import { useLocation } from 'react-router-dom';
import HotelCard from './../Shared/HotelCard';
import Newsletter from './../Shared/Newsletter';

const SearchResultList = () => {
    const location = useLocation();

    const [data] = useState(location.state);

    return (
        <>
            <CommonSection title={'Hotel Search Result'} />
            <section>
                <Container>
                    <Row>
                        {data.length === 0 ? (
                            <h4 className="text-center">No hotel found</h4>
                        ) : (
                            data?.map((hotel) => (
                                <Col lg="3" className="mb-4" key={hotel._id}>
                                    <HotelCard hotel={hotel} />
                                </Col>
                            ))
                        )}
                    </Row>
                </Container>
            </section>
            <Newsletter />
        </>
    );
};

export default SearchResultList;
