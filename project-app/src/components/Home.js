import { Carousel, Image } from "react-bootstrap";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Carousel style={{ height: '80vh' }}>
        <Carousel.Item>
          <Image src="https://cdn.pixabay.com/photo/2016/06/13/08/56/motorcycle-1453863_1280.jpg" />
          <Carousel.Caption>
            <h3>Harley Davidson</h3>
            <p>Don't Forget To Check The Other Bikes/Scooters/EV's etc</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://images.pexels.com/photos/13323889/pexels-photo-13323889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: '95vh', width: '87%' }} />
          <Carousel.Caption>
            <h3>Royal Enfield</h3>
            <p>Find Your Dream Bike Here.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="https://images.pexels.com/photos/3269629/pexels-photo-3269629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ height: '95vh', width: '87%' }} />
          <Carousel.Caption>
            <h3>Yamaha Bikes</h3>
            <p>
              Don't Forget To Check Other Yamaha Bikes !
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer/>
    </>
  )
}
export default Home;