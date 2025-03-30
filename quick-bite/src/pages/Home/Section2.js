import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";


const mockData = [
    {
        image: Pizza,
        title: "Original",
        paragraph: `A timeless delight with a perfectly seasoned patty, fresh toppings, and a soft bun, bringing you the authentic taste of a true classic!`,
    },
    {
        image: Salad,
        title: "Qualty Foods",
        paragraph: `Where every bite is crafted with the finest ingredients, ensuring delicious flavors and a dining experience you can trust!`,
    },
    {
        image: Delivery,
        title: "Fastest Delivery",
        paragraph: `Fresh, hot, and delicious food delivered to your doorstep in no time, because great taste shouldn't have to wait!`,
    },
];

function Section2() {
    return (
        <>
            <section className="about_section">
                <Container>
                    <Row>
                        <Col lg={{ span: 8, offset: 2 }} className="text-center">
                            <h2>The burger tastes better when you eat it with your family</h2>
                            <p>Family Feast Burger – a mouthwatering blend of juicy flavors, perfectly crafted to taste even better when enjoyed with your loved ones. Because great food is best shared!
                            </p>
                            <Link to="/" className="btn order_now btn_red">Explore Full Menu</Link>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="about_wrapper">
                <Container>
                    <Row className="justify-content-md-center">{mockData.map((cardData, index) => (
                        <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                            <div className="about_box text-center">
                                <div className="about_icon">
                                    <img src={cardData.image} className="img-fluid" alt="icon" />
                                </div>
                                <h4>{cardData.title}</h4>
                                <p>{cardData.paragraph}</p>
                            </div>
                        </Col>
                    ))}</Row>
                </Container>
            </section>
        </>

    )
}

export default Section2