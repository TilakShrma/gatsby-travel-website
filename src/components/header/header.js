import React from "react"
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./header.styles"
import { menuData } from "../../data/MenuData"
import { Button } from "../button/Button"

const Header = () => {
  return (
    <Nav>
      <NavLink to="/">EXPLORIX</NavLink>
      <Bars />
      <NavMenu>
        {
          menuData && menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))
        }
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/trips"> Book a Flight</Button>
      </NavBtn>
    </Nav>
  )
}

export default Header
