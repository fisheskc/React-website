import React from 'react';
import styled from "styled-components";
import './components.css';
// import bridge from "../images/bridge.png";

export default function Banner() {
  return (
      <div className="bannerCl">
        <div className="mybox">
          <h2>Karen Collins</h2>
          <p>Welcome to my home page</p>
        </div>
      </div>
  )
}

// this styling is applied to the div in HomeWrapper
// const BannerWrapper = styled.div`
// min-height: ${props => (props.max ? "100vh" : "60vh")};
// /* background: var(--typeColor), url(${props => props.img}) center/cover no-repeat; */
//
// color: (var(--$typeForColor));
// padding: 20px 0px;
// text-align: center;
// background-size: 100%;
// background-repeat: no-repeat;


// Banner.defaultProps = {
//     img: bridge
//   };
