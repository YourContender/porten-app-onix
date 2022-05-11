import { data }    from '../../data';
import React       from "react";
import ModalWindow from './modal-window/ModalWindow';
import CardWatch   from './card/CardWatch';
import Filtered    from './filter/Filtered';
import './ListProd.sass';

class ListProd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            filtered: [...data],
            showModal: false
        }
    }

    showModalWindow = () => {
        this.setState(({showModal}) => ({
            showModal: !showModal
        }))
    }

    cancelFilterMethod = () => {
        this.setState({
            filtered: [...data],
            showModal: false
        })
    }

    filteredPriceMethod = (id) => {
        this.setState(({filtered}) => ({
            filtered: [...filtered].sort((a, b) => (id == 1) ? (a.price - b.price) : (b.price - a.price))
        }))
    }

    filteredCountryMethod = (country) => {
        this.setState({
            filtered: [...data],
            showModal: false
        })

        this.setState(({filtered}) => ({
            filtered: filtered.filter(item => item.country === country)
        }))
    }

    addNewProduct = (prod) => {
        this.setState(({filtered}) => ({
            filtered: [prod, ...filtered]
        }))
    }

    render() {
        const { showModal, filtered } = this.state;

        return (
            <div className='list_container'>
                {
                    showModal && 
                        <ModalWindow 
                            showModalWindow={() => this.showModalWindow()}
                            addNewProduct={this.addNewProduct}
                        />
                }
                <div className='filter'>
                    <Filtered 
                        showModalWindow={this.showModalWindow} 
                        filteredPriceMethod={this.filteredPriceMethod}
                        filteredCountryMethod={this.filteredCountryMethod} 
                        cancelFilterMethod={this.cancelFilterMethod}
                    />
                </div>

                <div>
                    <div className='list_items'>
                        {
                            filtered.map(item => {
                                return(
                                    <CardWatch item={item} key={item.id}/>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default ListProd;