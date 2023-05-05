import React, { useEffect, useState } from 'react';
import CommonSection from '../Shared/CommonSection';

import '../styles/hotel.css';
import hotelData from '../assets/data/hotels';
import HotelCard from '../Shared/HotelCard';
import SearchBar from '../Shared/SearchBar';
import Newsletter from '../Shared/Newsletter';
import { Container, Row, Col } from 'reactstrap';

const Tours = () => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const pages = Math.ceil(5 / 4);
        setPageCount(pages);
    }, [page]);
    return (
        <>
            <CommonSection title={'All Hotels'} />
            <section>
                <Container>
                    <Row>
                        <SearchBar />
                    </Row>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    <Row>
                        {hotelData?.map((hotel) => (
                            <Col lg="3" className="mb-4" key={hotel.id}>
                                <HotelCard hotel={hotel} />
                            </Col>
                        ))}
                        <Col lg="12">
                            <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                                {[...Array(pageCount).keys()].map((number) => (
                                    <span
                                        key={number}
                                        onClick={() => setPage(number)}
                                        className={page === number ? 'active__page' : ''}
                                    >
                                        {number + 1}
                                    </span>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Newsletter />
        </>
    );
};

export default Tours;
