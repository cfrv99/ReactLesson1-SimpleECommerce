import React, { Component } from 'react'
import {
    
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge
  } from "reactstrap";
export default class CartList extends Component {


    render() {
        return (
            <div>
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options-{this.props.cart.length}
                </DropdownToggle>

                <DropdownMenu  right>
                {this.props.cart.map(cartItem=>(
                  <DropdownItem key={cartItem.id}>{cartItem.product.productName}-<Badge success>{cartItem.quantity}</Badge></DropdownItem>
                  
                  ))}
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
        )
    }
}
