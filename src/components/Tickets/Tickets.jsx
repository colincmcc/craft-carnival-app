import React, { Component } from "react";
import styled from "styled-components";
import Waypoint from "react-waypoint";

export default class Tickets extends Component {
  render() {
    return (
      <TicketContent>
        <SectionTitle id="ticketsTitle">What's Included</SectionTitle>
        <TicketInfo>
          <LeftTicket>
            <Waypoint
              topOffset="100px"
              onEnter={() => {
                document
                  .getElementById("ticketsTitle")
                  .classList.add("entered");
              }}
            />
            <About>
              <AboutItem>Craft Spririts & Beer Tastings</AboutItem>
              <AboutItem>Art Vendors</AboutItem>
              <AboutItem>Live Music</AboutItem>
              <AboutItem>Spectacular Prizes</AboutItem>
              <AboutItem>Interactive Games</AboutItem>
            </About>
          </LeftTicket>
          <RightTicket id="rightTicket">
            <EventbritePurchase>
              <iframe
                title="eventbritePurchase"
                src="https://www.eventbrite.com/checkout-external?eid=44955026695&amp;parent=http%3A%2F%2Fcraftcarnivalpgh.com"
                sandbox="allow-modals allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                data-automation="checkout-widget-iframe-44955026695"
                allowTransparency="true"
                scrolling="auto"
                width="100%"
                height="100%"
                frameBorder="0"
              />
            </EventbritePurchase>
          </RightTicket>
        </TicketInfo>
      </TicketContent>
    );
  }
}

const TicketContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const SectionTitle = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  font-family: "Freakshow";
  padding: 0 1rem;
  transform: skewY(-11.5deg);
  text-shadow: 0 0 42px #fbd45d;
  color: #252525;

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
const TicketInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 763px) {
    flex-direction: row;
  }
`;
const LeftTicket = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  @media (min-width: 763px) {
    width: 50%;
    float: left;
  }
`;
const RightTicket = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;

  @media (min-width: 763px) {
    width: 50%;
    float: right;
  }
`;
const EventbritePurchase = styled.div`
  display: flex;
  margin: auto;
  z-index: 3;
  height: 450px;

  @media (min-width: 763px) {
    padding: 2em 0 0 0;
  }

  @media (min-width: 1280px) {
    width: 450px;
    height: 600px;
  }
`;
const About = styled.ul`
  display: inline-grid;
  float: left;
  padding: 1rem;
  text-align: center;
  margin: auto;
  @media (min-width: 763px) {
    text-align: left;
  }
`;
const AboutItem = styled.li`
  display: block;
  float: left;
  font-family: "Concert One", cursive;
  color: white;
  font-size: 1.5em;
  padding: 0.5rem;
  @media (min-width: 763px) {
    font-size: 2em;
  }
  @media (min-width: 1280px) {
    font-size: 3em;
  }
`;
