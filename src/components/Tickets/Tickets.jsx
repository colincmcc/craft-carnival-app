import React, { Component } from 'react'
import styled from 'styled-components'

import fireBreather from '../../assets/images/duotone_fire.png'

export default class Tickets extends Component{
    

 

    render(){     
        
        
        return(
          <TicketContent >
            <LeftTicket>
              <SectionTitle>What's New</SectionTitle>
              <About>
                <AboutItem>SIDESHOW ACTS</AboutItem>
                <AboutItem>HUGE GRANDE PRIZES</AboutItem>
                <AboutItem>FOOD TRUCKS</AboutItem>
                <AboutItem>BLACKSMITHING</AboutItem>
                <AboutItem>ART VENDORS</AboutItem>
                <AboutItem>LIVE MUSIC</AboutItem>
              </About>
            </LeftTicket>
            <RightTicket>
              <EventbritePurchase>
                <iframe title="eventbritePurchase" src="https://www.eventbrite.com/checkout-external?eid=44955026695&amp;parent=http%3A%2F%2Fcraftcarnivalpgh.com%3A8000%2F" sandbox="allow-modals allow-scripts allow-forms allow-same-origin allow-popups allow-popups-to-escape-sandbox" data-automation="checkout-widget-iframe-44955026695" allowtransparency="true" scrolling="auto" width="100%" height="100%" frameborder="0" />
              </EventbritePurchase>
            </RightTicket>
          </TicketContent>
        )
    }
}

const TicketContent = styled.div`
    display: flex;
    background-image: url(${fireBreather});
    background-size: cover;
    flex-direction: column;
    padding: 2rem;
    @media(min-width: 763px){
        flex-direction: row;

    }
    
`

const SectionTitle = styled.h2`
    font-weight: 400;
    font-size: 3rem;
    font-family: 'Freakshow';
    padding: 0 1rem;
    transform: skewY(-11.5deg);
    text-shadow: 0 0 42px #FBD45D;
    color: #252525;
    &.altTitle{
        transform: skewY(0);

    }
    @media(min-width: 763px){
        font-size: 4rem;
    }
    
@media(min-width: 1280px){
        font-size: 6rem;
    }
`
const LeftTicket = styled.div`
display: flex;
flex-direction: column;
width: 100%;
text-align: center;

@media(min-width: 763px){
    width: 50%;
    float: left;

    }
`
const RightTicket = styled.div`
display: flex;
flex-direction: column;
width: 100%;
text-align: center;

@media(min-width: 763px){
width: 50%;
float: right;
}
`
const EventbritePurchase = styled.div`
    display: flex;
    margin: auto;
    z-index: 3;
    height: 450px;

@media(min-width: 763px){
    padding: 2em 0 0 0 ;
}

@media(min-width: 1280px){
    width: 450px;
    height: 600px;
}
`
const About = styled.ul`
    display: inline-grid;
    float: left;
    padding: 1rem;
    text-align: center;
    margin: auto;
    @media(min-width: 763px){

        text-align: left;
    }
`
const AboutItem = styled.li`
    display: block;
    float: left;
    font-family: 'Concert One', cursive;
    color: white;
    font-size: 1.5em;
    padding: .5rem;
    @media(min-width: 763px){

        font-size: 2em;
    }
    @media(min-width: 1280px){
        font-size: 4em;
    }

`