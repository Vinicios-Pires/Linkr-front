import { useContext } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

import * as S from "../styles/global.style.js";

import { MenuContext } from "../contexts/menu.context";
import { UserContext } from "../contexts/user.context";

import profilePic from "../assets/default-avatar.jpg";

export default function Header() {
  const { menuIsOpen, setMenuIsOpen } = useContext(MenuContext);
  const { logUserOut } = useContext(UserContext);

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen);

  return (
    <S.Header>
      <Link to="/">
        <h1>linkr</h1>
      </Link>
      <Navbar>
        <NavItem>
          <IoIosArrowDown onClick={handleMenuClick} />
          {/* <IoIosArrowUp onClick={handleMenuClick}/> */}
          <NavItemHidden>
            <DropLogout>
              <span onClick={logUserOut}>Logout</span>
            </DropLogout>
          </NavItemHidden>
        </NavItem>
        <NavItem>
          <img src={profilePic} alt="" />
        </NavItem>
      </Navbar>
    </S.Header>
  );
}

function Navbar(props) {
  return (
    <nav>
      <ul> {props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  return <li>{props.children}</li>;
}

function NavItemHidden(props) {
  const { menuIsOpen } = useContext(MenuContext);
  return <>{menuIsOpen && props.children}</>;
}

function DropLogout(props) {
  return <S.DropdownMenu>{props.children}</S.DropdownMenu>;
}
