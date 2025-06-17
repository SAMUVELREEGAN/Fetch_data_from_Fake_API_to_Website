import { Col, Container, Row } from 'react-bootstrap';
import pic from '../assets/about.webp';

const About = () => {
  return (
    <div>
      <div style={{backgroundColor:"#efefef" , padding:"60px 0px"}}>
               <Container style={{display:"flex" , justifyContent:"space-between"}}>
                 <h1 style={{ fontFamily: "'Times New Roman', Times, serif" }}>ABOUT US</h1>
               <div>
               <a href="/" style={{color:"orangered" , textDecoration:"none"}} className='me-0  me-md-0'>Home </a>/<span className='ms-1'>ABOUT US</span>
               </div>
               </Container>
            </div>
    <Container className="my-5">
      <Row className="d-flex align-items-stretch g-4">
        <Col md={6}>
          <img src={pic} alt="About Furns" className="img-fluid w-100 h-100" style={{ objectFit: 'cover' }} />
        </Col>
        <Col md={6} className="d-flex flex-column justify-content-center">
          <div>
            <h2>Welcome To Furns</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aperiam fugit
              consequuntur voluptatibus ex sint iure in, distinctio sed dolorem aspernatur veritatis
              repellendus dolorum voluptate, animi libero officiis eveniet accusamus recusandae.
              Temporibus amet ducimus sapiente voluptatibus autem dolorem magnam quas, porro
              suscipit. Quibusdam culpa asperiores exercitationem architecto quo distinctio sed
              dolorem!
            </p>
            <p>
              Sint voluptatum beatae necessitatibus quos mollitia vero, optio asperiores aut tempora
              iusto eum rerum, possimus, minus quidem ut saepe laboriosam. Praesentium aperiam
              accusantium minus repellendus laudantium provident quod recusandae exercitationem natus
              dignissimos.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default About;
