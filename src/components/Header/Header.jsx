import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

import ShareButton from "../common/Share_Button";
import twoeight from "../../assets/images/2to8.svg";
import june16 from "../../assets/images/june16.svg";
import ccLogo from "../../assets/images/craft-carnival.svg";

export default class Header extends Component {
  render() {
    return (
      <LogoWrapper id="logoWrapper">
        <Logo id="logo">
          <LogoImg src={ccLogo} alt="" />

          <BottomLogo>
            <LogoImg className="alt1" src={june16} />{" "}
            <LogoImg className="alt2" src={twoeight} />
          </BottomLogo>
        </Logo>

        <ShareWrapper>
          {" "}
          <ShareButton />{" "}
        </ShareWrapper>
      </LogoWrapper>
    );
  }
}

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1000;
  position: relative;
`;
const ShareWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
const LogoDrop = keyframes`
    from,
    60%,
    75%,
    90%,
    to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }

    0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
    }

    60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
    }

    75% {
    transform: translate3d(0, -10px, 0);
    }

    90% {
    transform: translate3d(0, 5px, 0);
    }

    to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
    }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin: auto;
  padding-top: 80px;
  padding-bottom: 100px;
  width: 100%;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
`;

const BottomLogo = styled.div`
    display: flex;
    width: 75%;
    margin: auto;
    position: relative;
    top: 0;

    @media(min-width: 763px){
        top: -30px;
        max-width: 75%
        width: 50vw;
    }
`;

const LogoImg = styled.img`
  width: 75%;
  margin: auto;
  display: flex;
  animation: ${LogoDrop} 1s;

  @media (min-width: 763px) {
    width: 50vw;
  }
  &.alt1 {
    animation: ${LogoDrop} 1s 0.5s;
    opacity: 0;
    animation-fill-mode: forwards;
    max-width: 30%;
    float: left;
    position: relative;
    left: 0px;
  }
  &.alt2 {
    animation: ${LogoDrop} 1s 1s;
    opacity: 0;
    animation-fill-mode: forwards;
    max-width: 30%;
    float: right;
    position: relative;
    right: 0px;
  }
`;
