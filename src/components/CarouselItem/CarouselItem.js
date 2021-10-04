import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselItem = () => {
    return (
            <div>
           <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block" style={{width:'100%', height:"580px"}}
      src="https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='text-white'>The Complete JavaScript Course</h3>
      <p className='text-white'>The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block" style={{width:'100%', height:"580px"}}
      src="https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3 className='text-white'>Real World Coding in HTML & CSS</h3>
      <p className='text-white'>Launch a career as a web designer by learning HTML5, CSS3, responsive design, Sass and more!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block" style={{width:'100%', height:"580px"}}
      src="https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3 className='text-white'>The Python Mega Course</h3>
      <p className='text-white'>Go from zero to hero in Python in weeks! Learn Python the easy way by building real-life Python programs!</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default CarouselItem;