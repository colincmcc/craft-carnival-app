import React, { Component } from 'react'
import styled from 'styled-components'

export default class Tickets extends Component{

    render(){

        return(
            <TicketWrapper >
                <header>
                    <SectionTitle >About</SectionTitle>
                </header> 
            </TicketWrapper>

        )
    }
}

const TicketWrapper = styled.section`
grid-area: main;
grid-row: 4;
grid-column: 2/4;
height: 100vh;
width: 100vw;
display: grid;
`
const TicketContent = styled.div`

`

const SectionTitle = styled.h2`
    font-weight: 400;
    font-size: 4rem;
    font-family: 'Fruktur', cursive;
    float: left;
    padding-top: 1em;
    padding-left: 1em;
    text-shadow: 0 0 42px #3d7b89;
    transform: skewY(-11.5deg);
    color: #ccc786;
    &.vertical{
        transform: skewY(0);
        writing-mode: vertical-rl;
        text-orientation: upright;
        float: right;
        position: absolute;
        right: 20px;
        padding: 0;
        margin: 0;
    }
    @media(max-width: 763px){
        font-size: 3em;
    }
`
const LeftTicket = styled.div`
display: block;
float: left
`
const RightTicket = styled.div`
display: block;
float: right;
`
const EventbritePurchase = styled.div`
display: block;
float: right;
`
const About = styled.div`
display: block;
float: left
`