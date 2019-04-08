/**@jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

import Logo from "./Logo";
import NavItem from "./NavItem";
import Notification from "./Notification";

import store from "./store/store";

const headerStyle = css`
  align-items: center;
  background: #0d0d0d;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
`;
const navbarStyle = css`
  margin: 3rem 0 0 0rem;
`;

const items = [
  { title: "Home", url: "/" },
  { title: "About", url: "about" },
  { title: "Products", url: "products" }
];
const Header = ({ active, setActive }) => (
  <React.Fragment>
    <div css={headerStyle}>
      <Logo />
      <nav css={navbarStyle}>
        {items.map((item, index) => (
          <NavItem
            key={index}
            index={index}
            active={index === active}
            onClick={setActive}
            linkName={item}
          />
        ))}
      </nav>
      <Notification store={store} />
    </div>
  </React.Fragment>
);

export default Header;
