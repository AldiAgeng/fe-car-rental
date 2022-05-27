import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import CardCars from "./CardCars";

import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../actions/cars";

export default function FilterCars() {
  const [capacity, setCapacity] = useState(null);
  const [avaliableAt, setAvaliableAt] = useState(null);
  const [pickupTime, setPickupTime] = useState(null);
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.carsReducer.cars);

  const handleCapacity = (event) => {
    setCapacity(event.target.value);
  };

  const handleAvaliableAt = (event) => {
    setAvaliableAt(event.target.value);
  };

  const handlePickupTime = (event) => {
    setPickupTime(event.target.value);
  };

  const handleSubmit = () => {
    console.log(avaliableAt, pickupTime, capacity);
    dispatch(fetchCars(avaliableAt, pickupTime, capacity));
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div className="filter-cars">
      <Container>
        <Row className="mt-5 pt-5">
          <Col md className="d-flex justify-content-center">
            <Card>
              <Card.Body>
                <Row>
                  <Col md>
                    <label className="form-label col-form-label-sm">Tipe Driver</label>
                    <select className="form-select form-select-sm" id="tipe-driver" aria-label="Default select example" defaultValue={null} disabled>
                      <option disabled>Pilih Tipe Driver</option>
                      <option value="1">Dengan Sopir</option>
                      <option value="2">Tanpa Sopir (Lepas Kunci)</option>
                    </select>
                  </Col>
                  <Col md>
                    <label className="form-label col-form-label-sm">Tanggal</label>
                    <input type="date" onChange={handleAvaliableAt} defaultValue={avaliableAt} className="form-control form-control-sm" id="tanggal" required />
                  </Col>
                  <Col md>
                    <label className="form-label col-form-label-sm">Waktu Jemput</label>
                    <select defaultValue={pickupTime} onChange={handlePickupTime} className="form-select form-select-sm icon-rtl" id="waktu-jemput" required>
                      <option value="00:00:00">Pilih Waktu</option>
                      <option value="08:00:00">08.00 WIB</option>
                      <option value="09:00:00">09.00 WIB</option>
                      <option value="10:00:00">10.00 WIB</option>
                      <option value="11:00:00">11.00 WIB</option>
                      <option value="12:00:00">12.00 WIB</option>
                    </select>
                  </Col>
                  <Col md>
                    <label className="form-label col-form-label-sm">Jumlah Penumpang (opsional)</label>
                    <input type="number" className="form-control form-control-sm" id="jumlah-penumpang" onChange={handleCapacity} defaultValue={capacity} placeholder="Jumlah Penumpang" />
                  </Col>
                  <Col md={1} className="text-center">
                    <Button className="btn btn-sm btn-light-green mx-auto search-btn" id="btn-search" onClick={() => handleSubmit()} type="submit">
                      Cari Mobil
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <CardCars cars={cars.data} />
      </Container>
    </div>
  );
}
