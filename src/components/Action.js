import { Card, Col, Container, Row, Image, Button, Modal} from 'react-bootstrap';
import React, { useState } from 'react';


const Action = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Container>
                <br/>
                <br/>
                    <h1 id='action'>ACTION MOVIE</h1>
                <br/>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src="https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className="text-center">React Movie Films</Card.Title>
                                        <div className='text-center'>
                                            <Button variant="outline-info" onClick={handleShow}>
                                                Show Info
                                            </Button>
                                        </div>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src="https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className="text-center">React Movie Films</Card.Title>
                                        <div className='text-center'>
                                            <Button variant="outline-info" onClick={handleShow}>
                                                Show Info
                                            </Button>
                                        </div>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src="https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className="text-center">React Movie Films</Card.Title>
                                        <div className='text-center'>
                                            <Button variant="outline-info" onClick={handleShow}>
                                                Show Info
                                            </Button>
                                        </div>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src="https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80"className='images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className="text-center">React Movie Films</Card.Title>
                                        <div className='text-center'>
                                            <Button variant="outline-info" onClick={handleShow}>
                                                Show Info
                                            </Button>
                                        </div>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src="https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className="text-center">React Movie Films</Card.Title>
                                        <div className='text-center'>
                                            <Button variant="outline-info" onClick={handleShow}>
                                                Show Info
                                            </Button>
                                        </div>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    <Col md={4} className="movieWrapper">
                        <Card className="movieImage">
                        <Image src="https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='images'/>
                            <div className='bg-dark'>
                                <div className='p-2 m-1 text-white'>
                                    <Card.Title className="text-center">React Movie Films</Card.Title>
                                        <div className='text-center'>
                                            <Button variant="outline-info" onClick={handleShow}>
                                                Show Info
                                            </Button>
                                        </div>
                                    <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>

                    {/* Modal */}
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>Films Info</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="outline-secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </Row>
            </Container>
        </div>
    )
}

export default Action