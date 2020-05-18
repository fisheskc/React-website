import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import './components.css';
import {ProductConsumer} from "../context";

export default function Sidebar() {
  return (
    <ProductConsumer>
      { value => {
      // links from the context.js
        const {links, dropDownMenu, handleDownMenu} = value;
        return (
          <SideWrapper show={dropDownMenu}>
            <ul className="ulMyclass">
              {links.map(link => {
                  return (
                    <li key={link.id}>
                      <Link to={link.path} className="sidebar-link"
                      onClick={handleDownMenu}>{link.text}
                      </Link>
                    </li>
                  )
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  )
}

const SideWrapper = styled.nav`
  position: fixed;
  top: 61px;
  left: 0px;
  width: 75%;
  height: 100%;
  z-index: 1;
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};
  ul {
    list-style-type: none;
    padding: 4px !important;
  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--ALink_SB);
    padding: 0.5rem 2rem;
    /* padding: 0.5rem 1.5rem; */
    /* background: transparent; */
    /* background: rgba(0, 0, 255, 0.52); */
    background: rgba(0, 0, 255, 0.9);
    transition: var(--mainTransition);
  }
  .sidebar-link:hover {
    background: var(--mainBlue);
    color: var(--typeColor);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    text-decoration: none;
  }
  @media (min-width: 576px) {
    width: 20rem;
`;

