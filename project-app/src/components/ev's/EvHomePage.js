import './Ev.css'
import { Carousel, Image } from 'react-bootstrap';


const EvHomePage = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <Image src='https://azcinbalprd.blob.core.windows.net/apm-bal-prd/MasterAttachment/46400' style={{height:'80vh'}}/>
                    <Carousel.Caption>
                        <h3>Bajaj Chetak</h3>
                        <p >Perfect Time To Switch To EV's.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <Image src='https://cdn.olaelectric.com/sites/evdp/pages/s1pro/s1progen2_bg_slider_web_image_03.webp' style={{height:'80vh'}}/>
                    <Carousel.Caption>
                        <h3>Ola S1 Pro</h3>
                        <p>Whole Color Range Of Ola S1.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <Image src='https://electricvehiclenewsindia.com/wp-content/uploads/2023/02/Ola-S1-Pro.jpg'style={{height:'80vh'}} />
                    <Carousel.Caption>
                        <h3>Ola S1 Pro</h3>
                        <p>
                           Don't Forget To Check Other Brand's As Well !
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
export default EvHomePage;