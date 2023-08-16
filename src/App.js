import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Offcanvas from './components/Offcanvas/Offcanvas';
import './App.css';
import DeviceList from './components/DeviceList/DeviceList';
import { PHONES } from './utils/phones';
import Dropdown from './components/Dropdown/Dropdown';



function App() {
  const inStockPhones = PHONES.filter((phone) => phone.InStock > 0);

  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState({});
  const [sortedAndFilteredDevices, setSortedAndFilteredDevices] = useState(inStockPhones);

  useEffect(() => {
    let newSelectedBrands = {};

    inStockPhones.forEach((phone) => {
      newSelectedBrands[phone.Brand] = false;
    });

    setSelectedBrands(newSelectedBrands);
  }, []);

  useEffect(() => {
    let newSortedAndFilteredDevices = [];
    let atLeastOneSelectedBrand = Object.values(selectedBrands).some((value) => value === true);

    newSortedAndFilteredDevices = inStockPhones.filter((phone) => {
      let hasBrand = true;

      if (atLeastOneSelectedBrand) {
        if (!selectedBrands[phone.Brand]) {
          hasBrand = false;
        }
      }

      return hasBrand;
    });

    setSortedAndFilteredDevices(newSortedAndFilteredDevices);
    console.log(selectedBrands);
  }, [selectedBrands]);

  console.log(inStockPhones);
  console.log(selectedBrands);

  const handleShow = () => {
    console.log('Hello');
    setShowOffcanvas(true);
  };
  const handleHide = () => setShowOffcanvas(false);

  const isChecked = (brand) => {
    console.log(`checked? ${brand} ${selectedBrands[brand]}`);
    return selectedBrands[brand] ? true : false;
  };

  return (
    <div className="app">
      <Navbar bg="primary" expand="lg" className="mb-4">
        <Container>
          <Navbar.Brand href="/">Hello Mobile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/services">Services</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="d-flex flex-wrap">
        <Dropdown>
          {Object.keys(selectedBrands).sort().map((brand) => {
            return (
              <div className="d-flex flex-wrap">
                <input type="checkbox" checked={isChecked(brand)} onChange={() => {
                  setSelectedBrands({ ...selectedBrands, [brand]: !selectedBrands[brand] });
                }} />
                {brand}
              </div>
            );
          })}
        </Dropdown>

        <Dropdown>
          {Object.keys(selectedBrands).sort().map((brand) => {
            return (
              <div className="d-flex flex-wrap">
                <input type="checkbox" checked={isChecked(brand)} onChange={() => {
                  setSelectedBrands({ ...selectedBrands, [brand]: !selectedBrands[brand] });
                }} />
                {brand}
              </div>
            );
          })}
        </Dropdown>

        <Dropdown>
          {Object.keys(selectedBrands).sort().map((brand) => {
            return (
              <div className="d-flex flex-wrap">
                <input type="checkbox" checked={isChecked(brand)} onChange={() => {
                  setSelectedBrands({ ...selectedBrands, [brand]: !selectedBrands[brand] });
                }} />
                {brand}
              </div>
            );
          })}
        </Dropdown>
      </div>


      <DeviceList devices={sortedAndFilteredDevices} />


      <button onClick={handleShow}>Show Offcanvas</button>
      <Offcanvas show={showOffcanvas} onHide={handleHide}>
        <h3>Offcanvas Content</h3>
        <p>This is the content inside the offcanvas component.</p>
      </Offcanvas>
    </div>
  );
}

export default App;
