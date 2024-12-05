import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "screens/landing_page";
import {
BikeCreate, BikeEdit, BikeView, 
BikeList, 
Bikes, 
BookingCreate, BookingEdit, BookingView, 
BookingList, 
Bookings
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                                                <Route path="/BookBikesOnlineFE/html" element={<LandingPage {...props} title={'LandingPage'} nolistbar={true} />} />
                                                        <Route path="Bikes/view/:id" element={<BikeView {...props} title={'View Bike'} />} />
                        <Route path="Bikes/edit/:id" element={<BikeEdit {...props} title={'Edit Bike'} />} />
                        <Route path="Bikes/create" element={<BikeCreate {...props} title={'Create Bike'} />} />
                                                <Route path="/" element={<Bikes {...props} title={'Bike'} nolistbar={true} />} />
                                                                                                                                            <Route path="Bookings/view/:id" element={<BookingView {...props} title={'View Booking'} />} />
                        <Route path="Bookings/edit/:id" element={<BookingEdit {...props} title={'Edit Booking'} />} />
                        <Route path="Bookings/create" element={<BookingCreate {...props} title={'Create Booking'} />} />

                <Route path="/bike1" element={<Bikes {...props} title={'Bike'} />} />
                <Route path="/booking1" element={<Bookings {...props} title={'Booking'} />} />
                <Route path="/bikes1/list" element={<BikeList {...props} title={'Bikes'} />} />
                <Route path="/bookings1/list" element={<BookingList {...props} title={'Bookings'} />} />
        </Routes>
    )

};

export default Component;
