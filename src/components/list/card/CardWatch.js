import React from "react";
import { Card, Button, ListGroupItem, ListGroup } from "react-bootstrap";

class CardWatch extends React.Component {
    render() {
        const { url, title, description, price, currency, country } = this.props.item;
        const photoLink = typeof url === 'string' ? url : url.path + '.' + url.extension;
        const initCurrency = currency ? currency : 'uah';
        const initCountry = country ? country : 'Ukraine';

        return (
            <>
                <Card style={{ width: '20rem', marginLeft: '15px', marginRight: '30px', marginTop: '55px' }}>
                    <Card.Img style={{ height: '310px' }} variant="top" src={photoLink} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {description.length > 15 ? description.split(' ').slice(0, 11).join(' ') : null}
                            {description.length === 0 && 'К этому товару описание не было добавлено. Подробнее о нем вы можете узнать у продавца'}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem><strong>Price: </strong>{price}</ListGroupItem>
                        <ListGroupItem><strong>Currency: </strong>{initCurrency}</ListGroupItem> 
                        <ListGroupItem><strong>Country: </strong>{initCountry}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="danger" style={{marginRight: '10px'}}>Удалить</Button>
                        <Button variant="primary">Купить</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default CardWatch;