import React, { Component, useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from "reactstrap";
import CartList from "./CartList";
export default class Navi extends Component {
  render() {   
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React Store</NavbarBrand>
          <NavbarToggler  />
          <Collapse  navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                
              </NavItem>
              <CartList cart={this.props.cart}></CartList>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
