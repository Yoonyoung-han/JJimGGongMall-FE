import React, { useState } from "react";
import { Button, Container, Form, Col, Row, Nav, Navbar, NavDropdown, Offcanvas } from "react-bootstrap";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import './Nav.css';  // 스타일 파일 임포트

const mockCategories = [
  {
    id: 1,
    name: "Fruits",
    subcategories: [
      { id: 1, name: "Citrus" },
      { id: 2, name: "Berries" },
      { id: 3, name: "Tropical" },
    ],
  },
  {
    id: 2,
    name: "Vegetables",
    subcategories: [
      { id: 4, name: "Leafy Greens" },
      { id: 5, name: "Root Vegetables" },
      { id: 6, name: "Stalk Vegetables" },
    ],
  },
  {
    id: 3,
    name: "Dairy",
    subcategories: [
      { id: 7, name: "Milk" },
      { id: 8, name: "Cheese" },
      { id: 9, name: "Yogurt" },
    ],
  },
];

const Navigation = (props) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  const handleCategoryHover = (categoryId) => {
    const category = mockCategories.find(cat => cat.id === categoryId);
    setSubcategories(category.subcategories);
    setHoveredCategory(categoryId);
  };

  const handleCategoryLeave = () => {
    setHoveredCategory(null);
    setHoveredSubcategory(null);
    setSubcategories([]);
  };

  const handleSubcategoryHover = () => {
    setHoveredSubcategory(true);
  };

  const handleSubcategoryLeave = () => {
    setHoveredSubcategory(false);
  };

  const renderCategories = () => (
    <div
      className="categories-container"
      onMouseLeave={handleCategoryLeave}
    >
      <ul className="navContainer">
        {mockCategories.map((category) => (
          <li
            key={category.id}
            className={hoveredCategory === category.id ? "active" : ""}
            onMouseEnter={() => handleCategoryHover(category.id)}
          >
            <p>{category.name}</p>
            {hoveredCategory === category.id && (
              <div className={`detailMenu ${hoveredSubcategory ? 'show' : ''}`} onMouseEnter={handleSubcategoryHover} onMouseLeave={handleSubcategoryLeave}>
                <ul>
                  {category.subcategories.map(subcategory => (
                    <li key={subcategory.id} >{subcategory.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );


  return (
    <>
      <Navbar expand='xl' className="bg-body-tertiary mb-10">
        <Container fluid="md">
          <Navbar.Brand href="/">찜꽁몰 JJimGGongMall</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xl`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-xl`}
            aria-labelledby={`offcanvasNavbarLabel-expand-xl`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xl`}>
                찜꽁몰
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 me-3">
                <Form className="d-flex justify-content-center me-3 w-100">
                  <Form.Control
                    type="search"
                    placeholder="검색어를 입력해주세요"
                    className="me-2"
                    aria-label="Search"
                    style={{ maxWidth: '800px' }}
                  />
                  <Button variant="Link" type="submit">{<SearchOutlinedIcon />}</Button>
                </Form>
                <Nav.Link href="/wishlist"> {<FavoriteBorderOutlinedIcon />} </Nav.Link>
                <Nav.Link href="/cart"> {<ShoppingCartOutlinedIcon />} </Nav.Link>
                <NavDropdown
                  title={<PersonOutlineOutlinedIcon />}
                  id={`offcanvasNavbarDropdown-expand-xl`}
                >
                  <NavDropdown.Item href="/signin">로그인 하기</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/signup">회원 가입하기</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <Navbar expand='xl' className="bg-body-tertiary mb-10">
        <Container fluid="md">
          <Row className="w-100">
           <Col
              onMouseEnter={() => setHoveredCategory(true)}
              
            >
              <h5 className="mt-1"><MenuOutlinedIcon className="mb-1" /> 카테고리</h5>
            </Col>
            <Col xs={7}>
              <Row>
                <Col><Navbar.Brand href="#"><a>베스트</a></Navbar.Brand></Col>
                <Col><Navbar.Brand href="#"><a>신상품</a></Navbar.Brand></Col>
                <Col><Navbar.Brand href="#"><a>특가/선착순</a></Navbar.Brand></Col>
              </Row>
            </Col>
            <Col></Col>
            {hoveredCategory && renderCategories()}
          </Row>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
