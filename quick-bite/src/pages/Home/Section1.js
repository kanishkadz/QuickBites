import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Burger from "../../assets/hero/hero-2.png"
import { Link } from 'react-router-dom'

function Section1() {
    return (
        <section className="hero_section">
            <Container>
                <Row>
                    <Col lg={7} className="mb-5 mg-lg-0">
                        <div className="position-relative">
                            <img src={Burger} className="img-fluid" alt="Hero" />
                            <div className="price_badge">
                                <div className="badge_text">
                                    <h4 className="h4_xs">Only</h4>
                                    <h4 className="h3_lg">$6.99</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5}>
                        <div className="hero_text text-center">
                            <h1 className="text-white">New Burger</h1>
                            <h2 className="text-white">With Onion</h2>
                            <p className="text-white pt-2 pb-4">
                            Introducing the Onion Burst Burger – a mouthwatering creation crafted for true onion lovers! Featuring a juicy, flame-grilled patty stacked with crispy golden onion rings, sweet caramelized onions, and a rich, zesty onion aioli, all nestled in a soft, toasted bun. Every bite delivers the perfect balance of crunch, smokiness, and savory goodness, making it an irresistible treat for burger enthusiasts!
                            </p>
                            <Link to="/" className="btn order_now">
                                Order Now
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Section1