import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
export default function CardCars({ cars }) {
  return (
    <div>
      <Row className="mt-5">
        {cars &&
          cars.length > 0 &&
          cars.map((car, i) => (
            <React.Fragment key={i}>
              <Col md={4} className="mb-3 d-flex justify-content-center">
                <Card style={{ width: "333px" }}>
                  <Card.Img variant="top" src={car.image} style={{ maxHeight: "13rem" }} />
                  <Card.Body>
                    <Card.Title>
                      {car.manufacture} / {car.type}
                    </Card.Title>
                    <Card.Text>
                      <span className="fw-bold">Rp. {car.rentPerDay.toString()}</span>
                    </Card.Text>
                    <Card.Text>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi soluta neque expedita quia, porro tempora sequi aliquam, optio corrupti doloribus magni officiis amet odit maiores perferendis quibusdam cum quod fuga.
                    </Card.Text>
                    <Card.Text>
                      <i className="bi bi-people"></i> {car.capacity} Penumpang
                    </Card.Text>
                    <Card.Text>
                      <i className="bi bi-gear"></i> {car.plate}
                    </Card.Text>
                    <Card.Text>
                      <i className="bi bi-calendar4"></i> Tahun {car.year}
                    </Card.Text>
                    <Button className="btn-light-green w-100">Pilih Mobil</Button>
                  </Card.Body>
                </Card>
              </Col>
            </React.Fragment>
          ))}
      </Row>
    </div>
  );
}
