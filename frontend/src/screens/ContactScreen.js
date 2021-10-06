import React, { useState, useEffect } from 'react'
import img from '../logo.png';
import axios from 'axios'

const ContactScreen = () => {
    const [contacts, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/contact')

            setProducts(data)
        }

        fetchProducts()
    }, [])
    return (
        <>
            <div className="col-12 d-flex justify-content-center mt-3">
                <img style={{ width: '100px' }} src={img} alt="" />
            </div>
            <h2 className="text-center mt-3">Contact Us</h2> <br />
            <div className="row mt-3">

                {contacts.map((contact) => (
                    <>
                        <p className="col-12 text-center">Email: {contact.email}</p>
                        <p className="col-12 text-center">Customer Care:{contact.customerCare}</p>
                        <p className="col-12 text-center">Call Us 24X7: {contact.callUstwoFourSeven}</p>
                        <p className="col-12 text-center">Call us from abroad 24X7: {contact.callUsFromAbroad}</p>
                        <p className="col-12 text-center">HEAD OFFICE: <br /> {contact.addressBarOne}, <br /> {contact.addressBarTwo}, <br /> {contact.addressBar}</p>
                    </>

                ))}

                {/* <p className="col-12 text-center">Email: info@yappmart.com</p>
                <p className="col-12 text-center">Customer Care: care@yappmart.com</p>
                <p className="col-12 text-center">Call Us 24X7: 16234</p>
                <p className="col-12 text-center">Call us from abroad 24X7: +880 092 0055 5555</p>
                <p className="col-12 text-center">HEAD OFFICE: <br /> House #16/A, Road #3E, Block # D, <br /> Gulshan 1, Gulshan, <br /> Dhaka 1212, Bangladesh</p> */}
                <div className="col-12 d-flex justify-content-center">
                    <h2>____________________________</h2>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h2>YAPP MART</h2>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h2>____________________________</h2>
                </div>
            </div>
        </>
    );
};

export default ContactScreen;