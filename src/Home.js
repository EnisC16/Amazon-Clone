import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/03/digital/video/gateway/placement/launch/alexrider/ALEXR_S1_GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600PV_de-DE._CB408428033_.jpg"
                alt=""
            />

            <div className="home__row">
                <Product
                    id="123456"
                    title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
                    price={9.81}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/510AO7UjVPL._SX331_BO1,204,203,200_.jpg"
                />

                <Product
                    id="123457"
                    title="Start with Why: How Great Leaders Inspire Everyone to Take Action"
                    price={10.19}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/51BlNddi+NL._SY344_BO1,204,203,200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="123458"
                    title="
                    Cololight LED Modul System, 16 Mio Farben und Effekte, Wifi Smart Home Steuerung für Android und Apple (1x Starter Set (1x Basis, 2x Extension))"
                    price={44.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61MQ1XZTiRL._AC_SL1204_.jpg"
                />

                <Product
                    id="123460"
                    title="
                    Logitech G915 LIGHTSPEED TKL kabellose mechanische Gaming-Tastatur ohne Ziffernblock, Clicky GL-Tasten-Switch mit flachem Profil, LIGHTSYNC RGB"
                    price={220.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/61dy-od7bZL._AC_SL1500_.jpg"
                />

                <Product
                    id="123461"
                    title="Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 3200MHz C16 XMP 2.0 Enthusiast RGB LED-Beleuchtung Speicherkit - schwarz"
                    price={119.42}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Kkm5nIRKL._AC_SL1500_.jpg"
                />
            </div>

            <div className="home__row">
                <Product
                    id="123459"
                    title="Samsung C49HG90DMU 124,20 cm (49 Zoll) Curved Gaming Monitor (3840 x 1080 Pixel, Ultra Wide 32:9 Format, 144hz, 1ms) mattschwarz"
                    price={689.37}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81vlA84pg6L._AC_SL1500_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
