import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
    return (
        <>
            <section className="promotion_section">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="text-center mb-5 mb-lg-0">
                            <img src={PromotionImage} className="img-fluid" alt="Promotion" />
                        </Col>
                        <Col lg={6} className="px-5">
                            <h2>Nothing brings people together like a good burger</h2>
                            <p>
                            Crafted with perfection, our burgers bring together the finest ingredients, bold flavors, and a touch of culinary magic for an unforgettable dining experience! From the first bite to the last, each layer is designed to deliver the perfect balance of taste and texture—juicy, flavorful patties, crisp, garden-fresh toppings, and a soft, toasted bun. Whether you're craving a classic favorite or an adventurous new creation, every burger is a masterpiece made just for you!
                            </p>
                            <ul>
                                <li>
                                    <p>
                                    Savor the perfect blend of flavors and textures, expertly crafted to satisfy your cravings with every delicious bite!
                                    </p>
                                </li>
                                <li>
                                    <p>Pure indulgence in every bite—our burgers redefine taste with premium ingredients and irresistible flavors!</p>
                                </li>
                                <li>
                                    <p>
                                    Experience the ultimate burger delight—juicy, flavorful, and made to satisfy your cravings like never before!
                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="bg_parallax_scroll"></section>
        </>
    );
}

export default Section4;