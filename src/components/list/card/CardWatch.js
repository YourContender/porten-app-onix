import React from "react";
import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";
import './CardWatch.sass';

class CardWatch extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            test: ''
        }
    }

    onActiveItem = (id) => {
        console.log(id);
        this.setState({
            test: id
        })
    }

    render () {
        const { url, title, description, price, currency, country, id } = this.props.item;
        const photoLink = typeof url === 'string' ? url : url.path + '.' + url.extension;
        const active = this.state.test ? "test_active" : '';

        return (
            <div className={active}>
                <Card draggable={true} className="card_container" onClick={() => this.onActiveItem(id)}>
                    <Card.Img className="card_img" variant="top" src={photoLink} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.length > 15 ? description.split(' ').slice(0, 11).join(' ') : null}
                            {description.length === 0 && 'К этому товару описание не было добавлено. Подробнее о нем вы можете узнать у продавца'}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="card_descr">
                            <strong className="card_descr_price">Price: </strong> {price}
                        </ListGroupItem>
                        <ListGroupItem><strong>Currency: </strong>{currency}</ListGroupItem> 
                        
                        <ListGroupItem><strong>Country: </strong>{country}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="danger" className="delete_btn" onClick={() => this.props.removeItem(id)}>Удалить</Button>
                        <Button variant="primary">Купить</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default CardWatch;

