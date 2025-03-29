import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';;

function Section3() {
  return (
    <section className="menu_section">
        <Container>
            <Row>
                <Col lg={{span:8, offset:2}}>
                    <h2>OUR CRAZY BURGERS</h2>
                    <p>Aliquam a augue suscipit, luctus neque purus ipsum neque undo
                        dolor primis libero tempus, blandit a cursus varius magna.
                    </p>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section3