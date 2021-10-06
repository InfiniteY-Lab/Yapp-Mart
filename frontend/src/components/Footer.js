import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import img from '../logo.png';

const Footer = () => {
  return (
    <footer className="bg-dark">
      <Container>
        <Row className="py-5">
            <Col className="col-12 d-flex justify-content-center">
                <div>
                    <img style={{width:'80px'}} src={img} alt="" />
                </div>
            </Col>
            <Col className='text-center text-light py-3'>Copyright &copy; Yapp Mart</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
