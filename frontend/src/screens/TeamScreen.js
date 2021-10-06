import { Row, Col, Container, Card, Button } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'



const TeamScreen = () => {
    const [teams, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/teams')

            setProducts(data)
        }

        fetchProducts()
    }, [])
    return (
        <>
            <h2 className="text-center mt-3">We, the Team</h2>
            <Container>
                <Row className="my-3">

                    {teams.map((team) => (
                        <Col className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={team.img} />
                                <Card.Body>
                                    <Card.Title>{team.Name}</Card.Title>
                                    <Card.Text>
                                        <h6>{team.descriptionTitleOne}</h6>{team.descriptionOne}
                                        {/* <h6 className="mt-2">{team.descriptionTitleOne}</h6> Proteus Develop, ALU Specialist, Assembly Develop */}
                                    </Card.Text>
                                    <Button variant="secondary">
                                        <a className="text-light" target="_blank" href="https://github.com/InfiniteY-Lab">Browse Us</a>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>



                    ))}



                    {/* <Col className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://scontent.fdac5-2.fna.fbcdn.net/v/t31.18172-8/20935146_931662506973910_4736493669840121923_o.jpg?_nc_cat=108&ccb=1-5&_nc_sid=174925&_nc_ohc=_AjTEzLA7xoAX8GjcL0&_nc_ht=scontent.fdac5-2.fna&oh=3d665c5e5eefce3b8487ea3dc443bd5a&oe=61839292" />
                            <Card.Body>
                                <Card.Title>Rafin Khan</Card.Title>
                                <Card.Text>
                                    <h6>Software Development :</h6> MERN Stack Develop, Android Develop, Java Develop
                                    <h6 className="mt-2">Hardware Development :</h6> Proteus Develop, ALU Specialist, Assembly Develop
                                </Card.Text>
                                <Button variant="primary">
                                    <Link className="text-light" to="https://www.facebook.com/rafin.alam.39">Browse Me</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-1/p240x240/199984238_957583861731269_5041779831688518585_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=7206a8&_nc_ohc=NHgQVKGWOlMAX9Z7eB2&tn=FO4ZEGvsvMp4VV6y&_nc_ht=scontent.fdac5-1.fna&oh=0e5eba469ee76eb1c959432804bb7e54&oe=6180C57E" />
                            <Card.Body>
                                <Card.Title>Tonmoy Talukder</Card.Title>
                                <Card.Text>
                                    <h6>Software Development :</h6> React Js App Develop, Python Develop, Tailwind Specialist <br />
                                    <h6 className="mt-2">Data Science :</h6> Data Analysis, Machine Learning Model Develop, AI Tools Develop
                                </Card.Text>
                                <Button variant="primary">
                                    <Link className="text-light" to="https://www.facebook.com/tonmoytalukder2000/">Browse Me</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </>
    );
};

export default TeamScreen;