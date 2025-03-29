import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Promotion from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
        <section className="promotion">
            <Container>
                <Row>
                    <Col lg={6} className="text-center mb-5 mb-lg-0">
                        <img src={Promotion} className="img-fluid" alt="Promotion" />
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Section4