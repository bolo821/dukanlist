import React from 'react'
import './Event.css'
import event1 from '../images/event1.jpg'
import event2 from '../images/event2.jpg'
import event3 from '../images/event3.jpg'
import event4 from '../images/event4.jpg'
import { Carousel } from 'react-bootstrap'

export default function Event() {
    return (
        <div>
          
          <Carousel fade interval={3000}>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={event1}
      alt="First slide"
      style={{ height: '650px' }}
    />
    {/* <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={event2}
      alt="Second slide"
      style={{ height: '650px' }}
    />

    {/* <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={event3}
      alt="Third slide"
      style={{ height: '650px' }}
    />

    {/* <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption> */}
  </Carousel.Item>
</Carousel>

        </div>
    )
}
