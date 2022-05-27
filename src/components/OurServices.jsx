import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import imgServices from "../assets/img/img_service.png";
export default function OurServices() {
  return (
    <div className="services" id="services">
      <Container>
        <Row className="mt-5 pt-5">
          <Col md={6} className="text-center mt-5">
            <Image src={imgServices} className="img-fluid" alt="GambarOrang"></Image>
          </Col>
          <Col md={6} className="mt-5">
            <h2 className="text-justify mt-4">Best Car Rental for any kind of trip in (Lokasimu)!</h2>
            <p className="mt-4">
              Sewa mobil di (lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul className="list-group">
              <li className="list-group-item border-0">
                <i className="icon-check me-3 bi bi-check-lg"></i>
                Sewa Mobil Dengan Supir di Bali 12 Jam
              </li>
              <li className="list-group-item border-0">
                <i className="icon-check me-3 bi bi-check-lg"></i> Sewa Mobil Lepas Kunci di Bali 24 Jam
              </li>
              <li className="list-group-item border-0">
                <i className="icon-check me-3 bi bi-check-lg"></i> Sewa Mobil Jangka Panjang Bulanan
              </li>
              <li className="list-group-item border-0">
                <i className="icon-check me-3 bi bi-check-lg"></i> Gratis Antar - Jemput Mobil di Bandara
              </li>
              <li className="list-group-item border-0">
                <i className="icon-check me-3 bi bi-check-lg"></i> Layanan Airport Transfer / Drop In Out
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
