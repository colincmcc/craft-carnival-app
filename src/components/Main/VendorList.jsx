import React, { Component } from "react";
import styled from "styled-components";
import Modal from "react-responsive-modal";
import Waypoint from "react-waypoint";

import funkyLines from "../../assets/images/funky-lines_transparent.png";

export default class VendorList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeModal: null
    };
    this.clickHandler = this.clickHandler.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  clickHandler(e, index) {
    this.setState({ activeModal: index });
  }

  hideModal() {
    this.setState({ activeModal: null });
  }

  buildBrewList() {
    const { brews } = this.props;
    const brewList = [];

    brews.forEach(brew => {
      brewList.push({
        name: brew.node.acf.name,
        webUrl: brew.node.acf.website_url,
        fbUrl: brew.node.acf.facebook_url,
        twitterUrl: brew.node.acf.twitter_url,
        imgUrl: brew.node.acf.logo.source_url,
        id: brew.node.acf.logo.wordpress_id
      });
    });
    return brewList;
  }

  buildBrewModals() {
    const { brews } = this.props;
    const modalStateValues = brews.map(a => a.node.acf.wordpress_id);
    const modalStates = [];
    modalStateValues.forEach(modalStateValue => {
      modalStates.push({ [modalStateValue]: false });
    });
    return modalStates;
  }

  render() {
    const breweryItems = this.buildBrewList();
    const { sectionTitle, slug, alt } = this.props;
    const featuredVendor = breweryItems.filter(
      brew => brew.name === "Two Roads"
    );
    let hidden = false;
    if (featuredVendor.length === 0) hidden = true;
    console.log("Hello world!");
    console.log(featuredVendor);
    return (
      <BreweryWrapper className={alt}>
        <SectionTitle id={slug} className={alt}>
          {sectionTitle}
        </SectionTitle>
        <Waypoint
          topOffset="100px"
          onEnter={() => {
            document.getElementById(slug).classList.add("entered");
          }}
        />
        <FeaturedBrewery className={hidden ? "hidden" : ""}>
          {featuredVendor.map(featured => (
            <BreweryContainer className="featured">
              <BreweryLink
                id={featured.id}
                onClick={e => this.clickHandler(e, 500)}
              >
                <BreweryImg className="featured" src={featured.imgUrl} />
              </BreweryLink>
            </BreweryContainer>
          ))}
          <AboutFeature>
            {" "}
            Featuring Two Roads Brewing! New to Pittsburgh, Two Roads is rated
            one of the top 10 breweries in the U.S. Check out their booth at the
            Craft Carnival!{" "}
          </AboutFeature>
        </FeaturedBrewery>
        <BreweryGrid className={alt}>
          {breweryItems.map((brewItem, index) => (
            <BreweryContainer key={brewItem.id}>
              <Modal
                classNames={{
                  closeButton: "custom-closeButton",
                  overlay: "custom-overlay",
                  transitionEnter: "transition-enter",
                  transitionEnterActive: "transition-enter-active",
                  transitionExit: "transition-exit",
                  transitionExitActive: "transition-exit-active"
                }}
                open={this.state.activeModal === index}
                onClose={this.hideModal}
                center
                animationDuration={500}
              >
                <ModalWrapper>
                  <ModalImg src={brewItem.imgUrl} />
                  <ModalContent />
                  <ModalTitle>{brewItem.name}</ModalTitle>
                  <ModalFooter>
                    <SocialIcon
                      onClick={() => {
                        if (brewItem.twitterUrl != "")
                          window.open(brewItem.twitterUrl);
                      }}
                      className="fa fa-twitter"
                    />
                    <SocialIcon
                      onClick={() => {
                        if (brewItem.facebookUrl != "")
                          window.open(brewItem.facebookUrl);
                      }}
                      className="fa fa-facebook"
                    />
                    <SocialIcon
                      onClick={() => {
                        if (brewItem.webUrl != "") window.open(brewItem.webUrl);
                      }}
                      className="fa fa-globe"
                    />
                  </ModalFooter>
                </ModalWrapper>
              </Modal>
              <BreweryLink
                id={brewItem.id}
                onClick={e => this.clickHandler(e, index)}
              >
                <BreweryImg className={alt} src={brewItem.imgUrl} />
              </BreweryLink>
            </BreweryContainer>
          ))}
        </BreweryGrid>
      </BreweryWrapper>
    );
  }
}

// TODO BreweryWrapper is a nested mess of CSS.  Tidy up.

const BreweryWrapper = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 4;
  min-height: 90vh;
  &.one {
    float: left;
    background-color: #196591;
    height: 100vh;
    @media screen and (min-width: 763px) {
      width: 90%;
      height: 80vh;
    }
    &:after {
      content: "";
      background-image: url(${funkyLines});
      background-repeat: repeat-x repeat-y;
      opacity: 0.1;
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      left: 0;
      @media screen and (min-width: 763px) {
        width: 90%;
        height: 80vh;
      }
    }
  }
  @media screen and (min-width: 763px) {
    padding: 0 10vmin 4rem 10vmin;
    padding-bottom: 3rem;
  }
`;

const BreweryGrid = styled.div`
  display: grid;
  justify-content: space-evenly;
  justify-items: center;
  padding: 2em 2em;
  grid: minmax(150px, auto) / repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 5px;
  width: 100%;
  @media (min-width: 763px) {
    grid: auto / repeat(4, minmax(150px, 1fr));
  }
`;
const SectionTitle = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  font-family: "Freakshow";
  padding-left: 1em;
  padding-bottom: 1em;
  text-shadow: 0 0 42px #ffc176;
  transform: skewY(-11.5deg);
  color: #252525;

  @media (min-width: 763px) {
    font-size: 4em;
    transform: skewY(-11.5deg) translateX(-100%);
    opacity: 0;
    transition: 500ms;
    &.entered {
      transform: skewY(-11.5deg) translateX(0);
      opacity: 1;
    }
  }
  @media screen and (min-width: 1280px) {
    font-size: 6rem;
  }
`;

const SocialIcon = styled.span`
  padding: 10px;

  &:hover {
    color: #c56543;
  }
`;

const FeaturedBrewery = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 75%;
  padding: 2em;
  border: 2px solid black;
  @media (min-width: 763px) {
    flex-direction: row;
    max-width: 50%;
  }
  &.hidden {
    display: none;
  }
`;

const AboutFeature = styled.p`
  display: flex;
  margin: auto;
  padding: 1em;
  font-family: "Source Sans Pro", sans-serif;
  @media (min-width: 763px) {
    font-size: 1.5em;
  }
`;
const BreweryContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  max-width: 150px;
  max-height: 150px;
  @media (min-width: 763px) {
    max-width: 200px;
    max-height: 200px;
  }
  &:hover {
    outline: 2px solid #c56543;
  }
  &.featured {
    margin: auto;
  }
`;
const BreweryLink = styled.div`
  display: flex;
  width: 100%;
  @media (min-width: 763px) {
    font-size: 3em;
    height: 100%;
  }
`;

const BreweryImg = styled.img`
  display: block;
  width: 100%;
  max-width: 150px;
  max-height: 150px;
  margin: auto;
  @media (min-width: 763px) {
    max-width: 200px;
    max-height: 200px;
    &.featured {
      max-width: 300px;
      max-height: 300px;
    }
  }
  &:hover {
    opacity: 0.8;
  }
`;

// Modal Design
const ModalWrapper = styled.div`
  display: grid;
  grid-column-gap: 20px;
  grid-template-areas:
    "title"
    "img"
    "bd"
    "ft";
  color: black;
  z-index: 999;
  @media (min-width: 600px) {
    clear: both;
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  @supports (display: grid) {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: 150px 3fr;
    grid-template-rows: auto 1fr auto;
    grid-template-areas:
      "img title"
      "img bd"
      "ft bd";
  }
`;
const ModalContent = styled.div`
  display: none;
  @media (min-width: 600px) {
    grid-area: bd;
    padding: 1.2rem;
    display: flex;
    overflow-y: auto;
  }
`;
const ModalFooter = styled.div`
  grid-area: ft;
  font-size: 2em;
  padding: 1.2rem;
  display: flex;
  @media (min-width: 600px) {
    padding: 10px;
  }
`;
const ModalTitle = styled.div`
  grid-area: title;
  font-size: 2em;
  padding-top: 1.2rem;
  padding-bottom: 1.2rem;
  font-weight: bold;
  text-align: center;
  font-family: "Concert One", cursive;
`;

const ModalImg = styled.img`
    display:flex;
    grid-area: img;
    width: 100%
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    align-items: end;
    justify-content: end;
    @media (min-width: 600px) {
        margin: 0 10px 0 0;
        width: 150px;

    }
`;
