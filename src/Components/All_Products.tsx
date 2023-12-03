import axios from "axios";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Header from "../Components/Header";
import Rating from "../Components/Rating";

interface Products {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  description: string;
  category: string;
}

const truncateDescription = (text: string, maxLength: number) => {
  return text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
};

const All_Products = () => {
  const [products, setProducts] = useState<Products[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const result = response.data;
      setProducts(result);
    } catch (error) {
      console.error("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container>
      <Row>
        <Col>
          <Header />
          <div>
            <h1 className="title">All Products</h1>
          </div>
          <section className="content">
            {products.map((item) => (
              <Card key={item.id} className="card">
                <Card.Img
                  src={item.image}
                  alt={`Item ${item.id}`}
                  className="product-img"
                />
                <Card.Body>
                  <Card.Title>
                    <strong>{item.title}</strong>
                  </Card.Title>
                  <Card.Text>
                    <p>${item.price.toFixed(2)}</p>
                    <p className="stars">
                      <Rating rate={item.rating.rate} />
                    </p>
                    <p className="description" title={item.description}>
                      {truncateDescription(item.description, 100)}
                    </p>
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <button className="btn-comprar">Comprar</button>
                </Card.Footer>
              </Card>
            ))}
            <a href="#" onClick={scrollToTop}>
              <i className="bi bi-arrow-up-short"></i>
            </a>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default All_Products;
