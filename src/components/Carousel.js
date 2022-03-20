import { Carousel} from 'react-bootstrap';
import { Component } from "react";


class ControlledCarousel extends Component {

    render() {
      return(
        <div>

          <Carousel fade className="container-fluid p-4">
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://www.shoreexcursionsgroup.com/img/tour/CAPACLOUDGRDN-2.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1>C O S T A   R I C A</h1>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://www.tripsavvy.com/thmb/II-F7gL5oVNJ2E-aW6cbCnnJ1o8=/1116x837/smart/filters:no_upscale()/Santorini-Sunset_Lars-Ruecker_GettyImages-56a97ed23df78cf772a782d6.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1>S A N T O R I N I</h1>
            </Carousel.Caption>
          </Carousel.Item >
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/60/ef.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1>Y O S E M I T E</h1>
            </Carousel.Caption>
          </Carousel.Item>
          </Carousel>

          <div>
            <br/>
          </div>
    
        </div>
  
  
  
      )
    }
  }
  export default ControlledCarousel;
