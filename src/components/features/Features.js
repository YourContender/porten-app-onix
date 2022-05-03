import React from "react";
import './Features.sass';

class Features extends React.Component {
    render() {
        return (
            <section>
                <div className="features">
                    <div className='features_block'></div>
                    <div className="features_descr">
                        <div className="features_descr_title">
                            <h4>collection 2018</h4>
                            <div className="line"></div>
                        </div>
                        <div className="features_descr_text">
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non rutrum ornare ut
                                mattis habitant dui arcu. Sagittis amet nunc ut neque quis nibh arcu. Vivamus 
                                vestibulum nisi et venenatis sed scelerisque magna consectetur. Amet convallis 
                                quis gravida facilisis vulputate. Faucibus facilisi habitasse ipsum interdum 
                                dictum aliquet. Velit quis ullamcorper pulvinar nulla malesuada integer. Aenean
                                praesent viverra nulla nullam natoque volutpat curabitur auctor. Viverra viverra
                                ullamcorper scelerisque risus dignissim egestas. Id aliquam a aliquam egestas
                                leo orci pharetra sed diam. 
                            </span>
                        </div>
                        <div>
                            <button className="features_descr_btn">watch collection</button>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Features;