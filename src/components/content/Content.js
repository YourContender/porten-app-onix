import React            from "react";
import watch            from '../../img/logo/watch.png';
import { database }     from "../../database";
import { v4 as uuidv4 } from 'uuid';
import './Content.sass';

class Content extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        }
    }

    getRandomItems = () => {
        let result = [];

        for (let i = 0; i < 3; i++) {
            result.push(database[Math.floor(Math.random() * (database.length - 1) + 1)])
        } 

        return this.setState({
            data: [...this.state.data, ...result]
        })
    }

    componentDidMount() {
        this.getRandomItems();
    }

    render() {
        const { data } = this.state;

        return (
            <section>
                <div className="content">
                    <div className="content_season">
                        
                        <div className="content_season_title">
                            <h2>СЕЗОН 2020/21</h2>
                            <div className="line"></div>
                        </div>
                        
                        <div className="content_season_list">
                            {
                                data.map((item, i) => {
                                    const { title, price } = item;

                                    return (
                                        <div className="item" key={uuidv4()}>
                                            <div className="block">
                                                <img src={watch} alt="logo"/>
                                            </div>
                                            <div className="text">
                                                <span>{title}</span><br/>
                                                <span>{price}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className="content_catalog">
                        <div className="content_collection">
                            <div>
                                <span className="text_block">New Collection</span>
                            </div>
                            <div>
                                <button className="btn_block">Collection</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Content;