import React from "react";
import { Button, Form, Modal, Row } from "react-bootstrap";
import './ModalWindow.sass';
import { v4 as uuidv4 } from 'uuid';

class ModalWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            price: 0,
            description: '',
            url: '',
            currency: '',
            country: '',
            id: uuidv4()
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = () => {
        const { addNewProduct, showModalWindow } = this.props;
        const result = this.state;
        
        addNewProduct(result);
        showModalWindow();
    }
    
    render() {
        return(
            <div className="modal_container">
                    <Modal.Dialog size="lg" style={{height: '100%'}}>
                        <div className="modal_window">
                            <Modal.Header>
                                <Modal.Title>Добавление нового товара: </Modal.Title>
                            </Modal.Header>

                            <Form style={{display: 'flex', 'justifyContent': 'center', 'flexDirection': 'column'}}>
                                <Row className="mb-3, ml-3">
                                    <Form.Group controlId="form-1">
                                        <Form.Label style={{marginTop: '15px', marginLeft: '10px'}}>Введите название</Form.Label>
                                        <Form.Control style={{width: '80%', margin: '0 auto'}} name='title' onChange={this.handleInput} type="text" placeholder="enter title" />
                                    </Form.Group>

                                    <Form.Group controlId="form-2">
                                        <Form.Label style={{marginLeft: '10px'}}>Введите цену</Form.Label>
                                        <Form.Control style={{width: '80%', margin: '0 auto'}} name='price' onChange={this.handleInput} type="text" placeholder="enter price" />
                                    </Form.Group>
                                </Row>

                                <Form.Group className="mb-3" controlId="form-3">
                                    <Form.Label style={{marginLeft: '10px'}}>Введите описание</Form.Label>
                                    <Form.Control style={{width: '80%', margin: '0 auto'}} name='description' onChange={this.handleInput} placeholder="enter descr" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="form-4">
                                    <Form.Label style={{marginLeft: '10px'}}>url картинки</Form.Label>
                                    <Form.Control style={{width: '80%', margin: '0 auto'}} name='url' onChange={this.handleInput} placeholder="enter url photo" />
                                </Form.Group>

                                <Row className="mb-3">
                                    <Form.Group controlId="form-5">
                                        <Form.Label style={{marginLeft: '10px'}}>Валюта</Form.Label>
                                        <Form.Select style={{width: '80%', margin: '0 auto'}} name='currency' onChange={this.handleInput} defaultValue="Choose currency">
                                            <option>UAH</option>
                                            <option>USD</option>
                                            <option>EUR</option>
                                        </Form.Select>
                                    </Form.Group>

                                    <Form.Group controlId="form-6">
                                        <Form.Label style={{marginLeft: '10px'}}>Страна</Form.Label>
                                        <Form.Select style={{width: '80%', margin: '0 auto'}} name='country' onChange={this.handleInput} defaultValue="Choose country">
                                            <option>Ukraine</option>
                                            <option>Poland</option>
                                            <option>United Kingdom</option>
                                            <option>USA</option>
                                            <option>Canada</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Row>


                                <Button 
                                    variant="primary" 
                                    // type="submit" 
                                    style={{width: '200px', margin: '0 auto'}}
                                    onClick={() => this.onSubmit()}
                                >
                                    Submit
                                </Button>
                            </Form>

                            <Modal.Footer>
                                <Button 
                                    variant="secondary"
                                    onClick={() => this.props.showModalWindow()}
                                >
                                    Close
                                </Button>
                                <Button variant="primary">Save changes</Button>
                            </Modal.Footer>
                        </div>
                    </Modal.Dialog>
            </div>
        )
    }
}

export default ModalWindow;