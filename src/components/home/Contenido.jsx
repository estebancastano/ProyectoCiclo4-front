import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import CrearUsuario from '../usuarios/CrearUsuario';


function Contenido() {
  return (
    //<Container>

    <div>
      <Row >
        <Col sm={9}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../assets/images/imagen1.jpg").default}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../assets/images/imagen2.jpg").default}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../assets/images/imagen3.jpg").default}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>

        <Col sm={3}>   
        <CrearUsuario/>
        </Col>

      </Row>

  </div>



   
  );
}

export default Contenido;
