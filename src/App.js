import React from "react";
import { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  state = {
    categories: [],
    currentCategory: "",
    products: [],
    cart:[]
  };

  componentDidMount() {
    this.getProducts();
    
  }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category);
    this.getProducts(category.id);
  };
  addToCart=(product)=>{
      let newCart = this.state.cart;
      newCart.push({product:product,quantity:1});
      this.setState({cart:newCart});
  }
  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  };
  render() {
    let categoryInfo = { title: "Categories" };
    let productInfoo = { title: "Products" };

    return (
      <div className="bg-black">
        <Container>
          <Row>
            <Navi cart = {this.state.cart}></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo}
              ></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                currentCategory={this.state.currentCategory}
                info={productInfoo}
                addToCart={this.addToCart}
              ></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
