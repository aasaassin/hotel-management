import React, { useState, useRef, useEffect, useContext } from 'react';
import '../styles/hotel-details.css';
import { Container, Row, Col, Form, ListGroup } from 'reactstrap';
import { useParams } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';
import avatar from '../assets/images/avatar.jpg';
import Booking from '../components/Booking/Booking';
import Newsletter from '../Shared/Newsletter';
import useFetch from './../hooks/useFetch.js';
import { BASE_URL } from './../utils/config.js';
import { AuthContext } from './../context/AuthContext.js';

const TourDetails = () => {
    const { id } = useParams();
    const reviewsMsgRef = useRef('');
    const [hotelRating, setHotelRating] = useState(null);
    const { user } = useContext(AuthContext);

    //fetch data
    const { data: hotel, loading, error } = useFetch(`${BASE_URL}/hotels/${id}`);

    //destructure properties from hotel object
    const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = hotel;

    const { totalRating, avgRating } = calculateAvgRating(reviews);

    //format date
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    //submit request to the server

    const submitHandler = async (e) => {
        e.preventDefault();
        const reviewText = reviewsMsgRef.current.value;

        try {
            if (!user || user === undefined || user === null) {
                alert('Please sign in');
            }

            const reviewObj = {
                username: user?.username,
                reviewText,
                rating: hotelRating,
            };

            const res = await fetch(`${BASE_URL}/review/${id}`, {
                method: 'post',
                headers: {
                    'content-type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(reviewObj),
            });

            const result = await res.json();
            if (!res.ok) {
                return alert(result.message);
            }
            alert(result.message);
        } catch (error) {
            alert(error.message);
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Container>
                {loading && <h4 className="text-center pt-5">Loading.........</h4>}
                {error && <h4 className="text-center pt-5">{error}</h4>}
                {!loading && !error && (
                    <Row>
                        <Col lg="8">
                            <div className="hotel__content">
                                <img src={photo} alt="" />
                                <div className="hotel__info">
                                    <h2>{title}</h2>
                                    <div className="d-flex align-items-center gap-5">
                                        <span className="hotel__rating d-flex align-items-center gap-1">
                                            <i class="ri-star-fill" style={{ color: 'var(--secondary-color)' }}></i>
                                            {avgRating === 0 ? null : avgRating}
                                            {totalRating === 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                                        </span>
                                        <span>
                                            <i class="ri-map-pin-user-fill"></i>
                                            {address}
                                        </span>
                                    </div>
                                    <div className="hotel__extra-details">
                                        <span>
                                            <i class="ri-map-pin-2-line"></i>
                                            {city}
                                        </span>
                                        <span>
                                            <i class="ri-money-dollar-circle-line"></i>
                                            {price}/day
                                        </span>
                                        <span>
                                            <i class="ri-map-pin-time-line"></i>
                                            {distance} m
                                        </span>
                                        <span>
                                            <i class="ri-group-line"></i>
                                            {maxGroupSize} people
                                        </span>
                                    </div>
                                    <h5>Description</h5>
                                    <p>{desc}</p>
                                </div>
                                {/* reviews */}
                                <div className="hotel__reviews mt-4">
                                    <h4>Reviews ({reviews?.length} reviews)</h4>
                                    <Form onSubmit={submitHandler}>
                                        <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                                            <span onClick={() => setHotelRating(1)}>
                                                1 <i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setHotelRating(2)}>
                                                2 <i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setHotelRating(3)}>
                                                3 <i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setHotelRating(4)}>
                                                4 <i class="ri-star-fill"></i>
                                            </span>
                                            <span onClick={() => setHotelRating(5)}>
                                                5 <i class="ri-star-fill"></i>
                                            </span>
                                        </div>
                                        <div className="review__input">
                                            <input
                                                type="text"
                                                ref={reviewsMsgRef}
                                                required
                                                placeholder="share your thoughts"
                                            />
                                            <button className="btn primary__btn text-white" type="submit">
                                                Submit
                                            </button>
                                        </div>
                                    </Form>
                                    <ListGroup className="user__reviews">
                                        {reviews?.map((reviews) => (
                                            <div className="review__item">
                                                <img src={avatar} alt="" />
                                                <div className="w-100">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div>
                                                            <h5> {reviews.username}</h5>
                                                            <p>
                                                                {new Date(reviews.createdAt).toLocaleDateString(
                                                                    'en-US',
                                                                    options,
                                                                )}
                                                            </p>
                                                        </div>
                                                        <span className="d-flex align-items-center">
                                                            {reviews.rating}
                                                            <i class="ri-star-fill"></i>
                                                        </span>
                                                    </div>
                                                    <h6>{reviews.reviewText}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </ListGroup>
                                </div>
                            </div>
                        </Col>
                        <Col lg="4">
                            <Booking hotel={hotel} avgRating={avgRating} />
                        </Col>
                    </Row>
                )}
            </Container>
            <Newsletter />
        </>
    );
};

export default TourDetails;
