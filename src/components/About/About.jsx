import React, { Component } from "react";
import styled from "styled-components";
import Waypoint from "react-waypoint";
import fireBreather from "../../assets/images/duotone_fire.png";

export default class About extends Component {
  render() {
    return (
      <AboutContent>
        <SectionTitle id="aboutTitle">What's New</SectionTitle>
        <Waypoint
          topOffset="100px"
          onEnter={() => {
            document.getElementById("aboutTitle").classList.add("entered");
          }}
        />
        <Waypoint
          topOffset="100px"
          onEnter={() => {
            document
              .getElementById("aboutDescription")
              .classList.add("entered");
          }}
        />
        <Description id="aboutDescription">
          <AboutLi>
            The Craft Carnival is a unique Craft Spirits festival, that offers
            more than the usual beerfest. More than just music & beer, we
            present an experience.
          </AboutLi>
          <AboutLi className="item">
            A curated selection of beer, liquor, mead, and cider.{" "}
          </AboutLi>
          <AboutLi className="item">
            Craft cocktails featuring local & independent distillers.{" "}
          </AboutLi>
          <AboutLi className="item">
            Sideshow acts and interactive games with prizes that every craft
            beer & spirit enthusiast would appreciate.
          </AboutLi>
          <AboutLi className="item">
            Raffled grand prizes that range from all inclusive beercations to
            prize packages form your favorite brewery.
          </AboutLi>
          <AboutLi className="item">Access to very limited beers.</AboutLi>
        </Description>
      </AboutContent>
    );
  }
}

// STYLED COMPONENTS
const AboutContent = styled.div`
  display: flex;
  background-image: url(${fireBreather});
  background-size: cover;
  flex-direction: column;
  min-height: 90vh;
  padding: 2rem 4rem;
  color: #252525;
`;

const SectionTitle = styled.h2`
  display: flex;
  font-weight: 400;
  font-size: 3rem;
  font-family: "Freakshow";
  padding: 0 1rem;
  margin: auto;
  transform: skewY(-11.5deg);
  text-shadow: 0 0 42px #fbd45d;
  color: #252525;
  &.altTitle {
    transform: skewY(0);
  }

  @media (min-width: 763px) {
    font-size: 4rem;
    transform: skewY(-11.5deg) translateX(-100%);
    opacity: 0;
    transition: 500ms;
    &.entered {
      transform: skewY(-11.5deg) translateX(0);
      opacity: 1;
    }
  }

  @media (min-width: 1280px) {
    font-size: 6rem;
  }
`;
const Description = styled.ul`
  display: flex;
  flex-direction: column;
  margin: auto;
  font-size: 1rem;
  padding: 2rem 0;
  @media (min-width: 763px) {
    padding: 4rem;
    width: 75%;
    font-size: 2rem;
    transform: translateX(-100%);
    opacity: 0;
    transition: 1s 1s;
    &.entered {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
const AboutLi = styled.li`
  font-family: "Concert One", cursive;
  &.item {
    padding: 1rem 2rem;
  }
`;
