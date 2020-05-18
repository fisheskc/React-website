import React from 'react';
import {FaBars} from 'react-icons/fa';
import styled from 'styled-components';
import {ProductConsumer} from "../context";
// import sun from '../sun.svg';
// import {Link} from 'react-router-dom';
import './navbar.scss';

export default function Navbar() {
    return (
        <ProductConsumer>
            {value => {
                const { handleDownMenu } = value;
                  return (
                    <NavWrapper>
                      <div className="navbar">
                        <FaBars className="nav-icon" onClick={handleDownMenu} />
                          {/* <img src={sun} className="sun" alt="sun logo" /> */}
                      </div>
              </NavWrapper>
            )
          }}
          
        </ProductConsumer>
        
    )
}

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  /* width: 100%; */
  /* padding: 1rem 1.5rem; */
  /* background: var(--mainGrey); */
  /* border-bottom: 3px solid var(--primaryColor); */
 
  .nav-icon {
    font-size: 1.5rem;
    color:#fff;
    cursor: pointer;
  }
  .nav-cart {
    position: relative;
  }
`;
