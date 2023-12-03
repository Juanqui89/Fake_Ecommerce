import All_Products from "../Components/All_Products";
import Footer from "../Components/Footer";
import { Container, Row, Col } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <All_Products />
          <Footer />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
