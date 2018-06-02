import React, { Component } from "react";
import styled from "styled-components";
import Scrollspy from "react-scrollspy";

import IndustryLogo from "../../assets/images/Header-Logo.png";
import Lightbulb from "../../assets/images/Lightbulb.svg";
import Scroll from "../../assets/scripts/Scroll.js";

export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
    this.burgerToggle = this.burgerToggle.bind(this);
  }

  burgerToggle() {
    const { isActive } = this.state;
    if (isActive) {
      this.setState({ isActive: false });
    } else {
      this.setState({ isActive: true });
    }
  }
  render() {
    const { isActive } = this.state;
    return (
      <NavContent id="nav">
        <HeaderLogo href="http://IndustryPGH.com" />
        <NavBarWide>
          <Scrollspy
            className="scroll-spy-ul"
            items={["about", "tickets", "bands", "brews", "vendors", "info"]}
            currentClassName="is-current"
            offset="400px"
          >
            <NavListItem>
              <Scroll type="id" element="about">
                <NavLink>ABOUT</NavLink>
              </Scroll>
            </NavListItem>

            <NavListItem>
              <Scroll type="id" element="tickets">
                <NavLink>TICKETS</NavLink>
              </Scroll>
            </NavListItem>
            <NavListItem>
              <Scroll type="id" element="bands">
                <NavLink>BANDS</NavLink>
              </Scroll>
            </NavListItem>
            <NavListItem>
              <Scroll type="id" element="brews">
                <NavLink>BREWS</NavLink>
              </Scroll>
            </NavListItem>
            <NavListItem>
              <Scroll type="id" element="vendors">
                <NavLink>VENDORS</NavLink>
              </Scroll>
            </NavListItem>
            <NavListItem>
              <Scroll type="id" element="info">
                <NavLink>INFO</NavLink>
              </Scroll>
            </NavListItem>
          </Scrollspy>
        </NavBarWide>
        <NarrowTitle> Craft Carnival 2018 </NarrowTitle>
        <NavButton
          className={
            isActive ? "isActive fa fa-bars fa-2x" : "fa fa-bars fa-2x"
          }
          onClick={() => this.burgerToggle()}
        />
        <NavBarNarrow>
          <NavMenuNarrow id="navNarrow" className={isActive ? "isActive" : ""}>
            <Scrollspy
              className="scroll-spy-ul narrow"
              items={["about", "tickets", "bands", "brews", "vendors", "info"]}
              currentClassName="is-current"
            >
              <li width="100%">
                <SkewedBlock>
                  <NavNarrowButton
                    onClick={() => this.burgerToggle()}
                    href="#about"
                  >
                    ABOUT
                  </NavNarrowButton>
                </SkewedBlock>
              </li>
              <li width="100%">
                <SkewedBlock>
                  <NavNarrowButton
                    onClick={() => this.burgerToggle()}
                    href="#tickets"
                  >
                    TICKETS
                  </NavNarrowButton>
                </SkewedBlock>
              </li>
              <li width="100%">
                <SkewedBlock>
                  <NavNarrowButton
                    onClick={() => this.burgerToggle()}
                    href="#bands"
                  >
                    BANDS
                  </NavNarrowButton>
                </SkewedBlock>
              </li>
              <li width="100%">
                <SkewedBlock>
                  <NavNarrowButton
                    onClick={() => this.burgerToggle()}
                    href="#brews"
                  >
                    BREWS
                  </NavNarrowButton>
                </SkewedBlock>
              </li>

              <li width="100%">
                <SkewedBlock>
                  <NavNarrowButton
                    onClick={() => this.burgerToggle()}
                    href="#vendors"
                  >
                    VENDORS
                  </NavNarrowButton>
                </SkewedBlock>
              </li>
              <li width="100%">
                <SkewedBlock>
                  <NavNarrowButton
                    onClick={() => this.burgerToggle()}
                    href="#info"
                  >
                    INFO
                  </NavNarrowButton>
                </SkewedBlock>
              </li>
            </Scrollspy>
          </NavMenuNarrow>
        </NavBarNarrow>
      </NavContent>
    );
  }
}

const NavContent = styled.nav`
  display: grid;
  grid-column-template: 25% 1fr 25%;
  grid-template-areas: "logo nav hamburger";
  padding: 0.5vmin 1rem;
  width: 100%;
`;
const HeaderLogo = styled.div`
  display: block;
  grid-area: logo;
  width: 100%;
  background: url(${Lightbulb}) no-repeat left center;
  background-size: contain;
  height: 60px;
  margin-left: 1rem;
`;
const NavBarWide = styled.div`
  display: none;

  @media (min-width: 736px) {
    display: inline-flex;
    text-align: center;
    grid-area: nav;
    margin: auto;
  }
`;
const NavListItem = styled.li`
  cursor: pointer;
  text-align: center;
  &.float-right {
    float: right;
    text-align: right;
  }
`;
const NavLink = styled.a`
  display: inline-flex;
  color: white;
  font-family: "Concert One", cursive;
  margin: auto;
  padding: 0 1em;
  font-size: 1.5em;
  cursor: normal;
  &:hover {
    color: #ac2705;
  }
  &.is-current {
    color: #ac2705;
  }
`;
const NavBarNarrow = styled.div`
  display: inline-flex;
  text-align: end;
  float: right;
  margin: auto 0 auto auto;
  @media (min-width: 736px) {
    display: none;
  }
`;
const NavButton = styled.i`
  grid-area: hamburger;
  display: block;
  position: absolute;
  top: 16px;
  right: 24px;
  color: white;
  margin: auto;
  z-index: 1001;
  transition: 0.5s;
  @media (min-width: 736px) {
    display: none;
    visibility: hidden;
  }
  &.isActive {
    color: black;
    transform: rotate(90deg);
  }
`;

const NavMenuNarrow = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  background-color: white;
  width: 100vw;
  height: 100vh;
  transition: 0.5s;
  transform: scale(0, 0);
  transform-origin: top right;
  padding: 3rem 0;

  &.isActive {
    display: block;
    transform: scale(1, 1);
    opacity: 1;
  }
`;
const NarrowTitle = styled.div`
font-family: 'Freakshow';
grid-area: nav;
text-align: center;
display flex;
font-size: 1.75em;
color: #e44c1c;
margin: auto;

@media(min-width: 763px){
    display: none;
}
`;
const SkewedBlock = styled.div`
  transform: skewY(-11.5deg);
  display: block;
  width: 100%;
  border-bottom: 1px solid black;
  padding: 1em;
  text-align: center;
`;
const NavNarrowButton = styled.a`
  display: block;
  width: 100%;
  padding: 1em;
`;
