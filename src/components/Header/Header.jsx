import React, { Component } from 'react'
import styled, {keyframes} from 'styled-components'

import ShareButton from '../common/Share_Button'
import twoeight from '../../assets/images/2to8.svg'
import june16 from '../../assets/images/june16.svg'
import ccLogo from '../../assets/images/craft-carnival.svg'

export default class Header extends Component{

    render(){
        

        return(
          <LogoWrapper id="header">
            
            <Logo id="logoWrapper">
              
              <LogoImg src={ccLogo} alt="" />
              
              <BottomLogo>
                <LogoImg className="alt1"  src={june16} /> <LogoImg className="alt2"  src={twoeight} />
              </BottomLogo>

            </Logo>

            <ShareWrapper> <ShareButton /> </ShareWrapper>

          </LogoWrapper>

        )
    }
}

const LogoWrapper = styled.div`
display: flex;
z-index: 1000;
position: relative;
padding-bottom: 64px;

`
const ShareWrapper = styled.div`
position: absolute;
bottom: 0;
left: 50%;
transform: translateX(-50%);

`
const HeaderBg = styled.img`
position: absolute;
z-index: -1;
width: 100vmin;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

@media screen and (orientation:portrait) { 
    width: 200vmin;

}
@media screen and (orientation: landscape){
    width: 100vmax;

}
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

const Logo = styled.div`
    position: absolute;
    margin: auto;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    
`

const BottomLogo = styled.div`
    width: 75%;
    margin: auto;
    position: relative;
    top: 0;
    
    @media(min-width: 763px){
        top: -30px;
        max-width: 75%
        width: 50vw;
    }
`

const LogoImg = styled.img`
    width: 75%;
    margin: auto;
    display: block;
    animation: ${LogoDrop} 1s;
   
    @media(min-width: 763px){
       
        width: 50vw;
    }
    &.alt1{
        animation: ${LogoDrop} 1s .5s;
        opacity:0;
        animation-fill-mode: forwards;
        max-width: 30%;
        float: left;
        position: relative;
        left: 0px;
    }
    &.alt2{
        animation: ${LogoDrop} 1s 1s;
        opacity:0;
        animation-fill-mode: forwards;
        max-width: 30%;
        float: right;
        position: relative;
        right: 0px;
    }
`
