import React from "react";
import brand from '../../img/logo/brand.png';
import './Brands.sass';

class Brands extends React.Component {
    render() {
        return (
            <section>
                <div className="brands">
                    <div className="container">
                        <h4>our brands</h4>
                        <div className="line"></div>
                        <div className="brands_list">
                            <img src={brand} alt="brand"/>
                            <img src={brand} alt="brand"/>
                            <img src={brand} alt="brand"/>
                            <img src={brand} alt="brand"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Brands;