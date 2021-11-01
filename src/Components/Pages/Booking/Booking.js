import React, { useEffect, useState } from 'react';
import './Booking.css';
import BookingCard from './BookingCard/BookingCard';
import "./css/ui.css";
import "./css/responsive.css";
import Loading from '../../Loading';

const Booking = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch('https://pure-island-82181.herokuapp.com/packages')
            .then(res => res.json())
            .then(data => setBookings(data) && setLoading(true));
    }, [loading])

    console.log(bookings);

    return (
        <div className="App">
            <section className="section-pagetop">
                <div className="container-pagetop">
                    <h2 className="title-page">Booking cart</h2>
                </div>
            </section>

            <section className="section-content">
                <div className="section-container">

                    <div className="row">
                        <main className="col-md-9">
                            <div className="card">

                                <div className="table-shopping-cart">
                                    <div className="text-muted">
                                        <div className="small">
                                            <div className="heading-lavel-one">Product</div>
                                            <div className="heading-lavel-two">Price</div>
                                            <div className="heading-lavel-three"> </div>
                                        </div>
                                    </div>
                                    {!loading ?
                                        <div className="table-body">
                                            {
                                                bookings.map(book => <BookingCard
                                                    key={book._id}
                                                    book={book}
                                                ></BookingCard>)
                                            }
                                        </div> : <Loading></Loading>}
                                </div>

                                <div className="card-bdy">
                                    <button href="#" className=" btn-primary"> Make Purchase </button>
                                    <button href="#" className="btn-light">Browse More Package </button>
                                </div>
                            </div>

                        </main>
                        <aside className="col-md-3">
                            <div className="mb-3">
                                <div className="card-bdy">
                                    <form>
                                        <div className="form-group">
                                            <h4>Have Coupon?</h4>
                                            <div className="input-group">
                                                <input type="text" className="form-control" name="" placeholder="Coupon code" />
                                                <span className="input-group-append">
                                                    <button className="btn-apply">Apply</button>
                                                </span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="card-purchase">
                                <h4>Total Summery</h4>
                                <div className="card-bdy-total">
                                    <div className="dlist-align">
                                        <p className="text-sum">Total price:</p>
                                        <p className="text-sum">USD$ 568</p>
                                    </div>
                                    <div className="dlist-align">
                                        <p className="text-sum">Discount:</p>
                                        <p className="text-sum">USD$ 658</p>
                                    </div>
                                    <div className="dlist-align">
                                        <p className="text-bold">Total:</p>
                                        <p className="text-bold"><strong>$1,650</strong></p>
                                    </div>
                                    <hr />
                                    <div className="text-center">
                                        <img src="assets/images/misc/payments.png" alt="" height="26" />
                                    </div>

                                </div>
                            </div>
                        </aside>
                    </div>

                </div>
            </section>

            <section className="section-name">
                <div className="privacy-container">
                    <h6>Payment and refund policy</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                </div>
            </section>
        </div >
    );
};

export default Booking;