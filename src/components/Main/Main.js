import React, { useState } from "react";
import {Carousel,Image, Container} from "react-bootstrap";
import Item from "components/Item/Item";

const Main = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
    <Container className="d-flex justify-content-center align-items-center mb-10">
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
            <Image src="https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/ff234d36-58c0-402f-b761-4c65d33c1d3a.jpg" text="First slide" />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/46efd25d-695c-4294-8b2f-3595173828d8.jpg" text="Second slide" />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <Image src="https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/6a2c9ab8-aef4-498c-9291-f11be4aad903.jpg" text="Third slide" />
            <Carousel.Caption>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    </Container>
    <Container className="bg-body-tertiary mb-10">
        <Item />
    </Container>
    </>
  );
}

export default Main;