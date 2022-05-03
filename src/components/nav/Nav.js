import React    from 'react';
import logoShop from '../../img/logo/logo-porten.png';
import basket   from '../../img/logo/basket.png';
import search   from '../../img/logo/search.png';
import './Nav.sass';

class Nav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            blockItem: ['Понравилось', 'Личный кабинет', 'Настройки'],
            blockImg: [basket, search],
            active: false
        }

        this.onActiveClass = this.onActiveClass.bind(this);
    }

    onActiveClass(result) {
        this.setState({active: result})
    }

    render() {
        const { blockItem, blockImg, active } = this.state;

        return (
            <nav>
                <div className="nav">
                    <div className="container">
                        <div className="nav_block">
                            <div className="nav_block_logo">
                                <img src={logoShop} alt="logo"/>
                            </div>
                            <div className={active ? "nav_block_link_active" : 'nav_block_link'}>
                                {
                                    blockItem.map((item, i) => {
                                        return (
                                            <div 
                                                className="block_item" 
                                                key={i}
                                                onClick={() => this.onActiveClass(false)}
                                            >
                                                <span>{item}</span>
                                            </div>
                                        )
                                    })
                                }

                                {
                                    blockImg.map((item, i) => {
                                        return (
                                            <div className="block_item_link" key={i}>
                                                <img src={item} alt="basket"/>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div 
                            className={active ? "hamburger_active" : "hamburger"} 
                            onClick={() => this.onActiveClass(true)}
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </nav>  
        )
    }
}

export default Nav;