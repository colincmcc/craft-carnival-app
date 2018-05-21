import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'

import sunburst from '../../assets/images/cc-sunburst-solo-2.png'
import backgroundImg from '../../assets/images/craft-carnival-bg-v3-01.png';
import backgroundImg2 from '../../assets/images/craft-carnival-bg-v4-01.png';
import twoeight from '../../assets/images/2to8.svg'
import june16 from '../../assets/images/june16.svg'
import circle from '../../assets/images/circle-01.svg'

export default class Header extends Component{

    render(){
        
        const {homeEdge} = this.props

        return(
            <HeaderWrapper id="header">
                <HeaderBg src={sunburst} /> 
                <Logo id="logoWrapper">

                    <LogoImg src={homeEdge.acf.header_logo.url} alt="" />
                    <BottomLogo>
                        <LogoImg className="alt1"  src={june16} /> <LogoImg className="alt2"  src={twoeight} />
                    </BottomLogo>
                </Logo>
            </HeaderWrapper>

        )
    }
}
const HeaderBg = styled.img`
position: absolute;
width: 200vmin;
margin: auto;
@media(min-width: 736px){

}
@media screen and (orientation:portrait) { 
    left: -50%;
    top: -10%;
}
@media screen and (orientation: landscape){
    width: 110vmax;
    top: -25vmax;
    left: -5vmax;
}
`

const HeaderWrapper = styled.section`
    grid-area: header;
    display: grid;
    overflow: visible;
    position: relative;
    height: 90vh;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
   
`
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
`

const Logo = styled.span`
    margin: auto;
    z-index: 2;
`
const BottomLogo = styled.div`
    max-width: 100%;
    margin: auto;
    position: relative;
    top: 0;
    @media(min-width: 760px){
        top: -30px;
        max-width: 75%
    }
`

const LogoImg = styled.img`
    max-width: 50vw;
    margin: auto;
    display: block;
    animation: ${LogoDrop} 1s;
    &.alt1{
        animation: ${LogoDrop} 1s .5s;
        opacity:0;
        animation-fill-mode: forwards;
        max-width: 30%;
        float: left;
        position: relative;
        left: 20px;
    }
    &.alt2{
        animation: ${LogoDrop} 1s 1s;
        opacity:0;
        animation-fill-mode: forwards;
        max-width: 30%;
        float: right;
        position: relative;
        right: 20px;
    }
`