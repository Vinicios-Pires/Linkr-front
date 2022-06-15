import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io"

import * as S from "../styles/global.style.js"

import { MenuContext } from "../contexts/menu.context.jsx"

import profilePic from "../assets/default-avatar.jpg"

export default function Header() {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext)
  console.log(S)

  function handleMenuClick() {
    setMenuIsOpen(!menuIsOpen)
  }

  return (
    <S.Header>
      <Link to="/">
        <h1>linkr</h1>
      </Link>
      <Navbar >
        <NavItem>
          <IoIosArrowDown onClick={handleMenuClick} />
          {/* <IoIosArrowUp onClick={handleMenuClick}/> */}
          <NavItemHidden>
            <DropLogout>
              <span onClick={() => {}}>Logout</span>
            </DropLogout>
          </NavItemHidden>
        </NavItem>
        <NavItem>
          <img src={profilePic} alt="" />
        </NavItem>
      </Navbar>
    </S.Header>
  )
}

function Navbar(props) {
  return (
    <nav>
      <ul> {props.children}</ul>
    </nav>
  )
}

function NavItem(props) {
  return <li>{props.children}</li>
}

function NavItemHidden(props) {
  const { menuIsOpen } = useContext(MenuContext)
  return <>{menuIsOpen && props.children}</>
}

function DropLogout(props) {
  return <S.DropdownMenu>{props.children}</S.DropdownMenu>
}