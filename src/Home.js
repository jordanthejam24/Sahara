import React from 'react';
import Product from './Product';
import './Home.css';

function Home() {
    return (
        <div>
        {/* Remember to change this to a carousel!!! */}
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZmI5MDQwZjEt/ZmI5MDQwZjEt-MjM1YzAwZTUt-w1500._CB409541569_.jpg" alt="home photo" className="home__image"/>
            {/* rendering products, each with id title price img. properties = props */}
            <div className="home__row">
                <Product 
                    id="13134234"
                    title="Fake Iphone"
                    price={999.99}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/xba/GD_US_E_July_2020_379x304._SY304_CB429362087_.jpg"
                />
                <Product 
                    id="342342"
                    title="Some Small Bottles"
                    price={199.99}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2020/journeys/NTE3Zjc1NTEt/NTE3Zjc1NTEt-MzBhMzU0M2Mt-w186._SY116_CB428347144_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="1334844235"
                    title="Turquoise Towels"
                    price={15.95}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/51x-D-RBFML._AC_SY240_.jpg"
                />
                <Product 
                    id="13322492534"
                    title="Desk Setup"
                    price={50}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/journeys/NTJmNGQ1ODkt/NTJmNGQ1ODkt-MGI2ZTY1MWUt-w379._SY304_CB409683041_.jpg"
                />
                <Product 
                    id="1330604234"
                    title="Storage For Useless Items"
                    price={29.49}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Events/XCM_Manual_1225661_1180734_US_us_otc20_gw_mb_shortcut_card_dt_bubbler_en_3114959_200x200_2X_en_US._CB429039287_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="137344234"
                    title="Stock Images Name Brand Bag"
                    price={1399}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/418R2tGEN4L._AC_SY200_.jpg"
                />
            </div>
        </div>
    )
}

export default Home
