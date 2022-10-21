import React from "react"
import { Link, useParams } from "react-router-dom"
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap"
import Rating from "../components/Rating"
import products from "../products"
 
const ProductScreen = ({ match }) => {
  console.log(products)
  const { id } = useParams()
  console.log(id)
  const product = products.find((p) => p._id === id)
 
  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} />
        </Col>
        <Col md={3}></Col>
      </Row>
    </>
  )
}
 
export default ProductScreen
