import img from '../logo.png';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AboutUsScreen = () => {
    const [abouts, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/aboutUs')

            setProducts(data)
        }

        fetchProducts()
    }, [])
    return (
        <>
            <div className="mt-5">
                <h2>About Us</h2>
                <div className="d-flex justify-content-center">
                    <img src={img} alt="" />
                </div>
                
                {abouts.map((about) => (
                    <div>
                       <h5  className="mt-3">{about.descriptionTitleOne}</h5>
                       <p className="mt-2">
                           {about.descriptionOne}
                       </p>
                       <h5  className="mt-3">{about.descriptionTitleTwo}</h5>
                       <p className="mt-2">
                           {about.descriptiontwo}
                       </p>
                    </div>



                    ))}
                {/* <h5  className="mt-3">{abouts.descriptionTitleOne}</h5>
                <p className="mt-2">
                    {abouts.descriptionOne}
                </p>

                <h5  className="mt-3">{abouts.descriptionTitleTwo}</h5>
                <p className="mt-2">
                    One of the world's premier watchmakers, Yaap Mart Group, Inc. (MGI) designs, manufactures and distributes watches from nine of the most recognized and respected names in time: our wholly owned Yaap Mart, Concord and EBEL brands along with our Coach, HUGO BOSS, Juicy Couture, Lacoste, Tommy Hilfiger and Scuderia Ferrari licensed watch brands.
                </p>

                <p className="mt-2">
                    From our Swiss luxury timepieces to our accessible fashion watches, each of our brands is recognized for its inherent quality and distinctive image within its price category. Collectively, our timepieces are sold throughout North and South America, Europe, Asia and the Far East.
                </p>

                <p className="mt-2">
                    Between our manufacturing facilities in Switzerland, corporate headquarters in Paramus, New Jersey, USA and Bienne, Switzerland, and our sales and distribution offices around the world, Yaap Mart Group employs more than 1,330 people.
                </p> */}
            </div>
        </>
    );
};

export default AboutUsScreen;