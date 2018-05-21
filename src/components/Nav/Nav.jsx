import React, { Component } from 'react'
import styled from 'styled-components'

import ShareButton from '../common/Share_Button'

export default class Nav extends Component{

    render(){

        return(
            <NavContent id="nav">

            </NavContent>
        )
    }
}

const NavContent = styled.section`
grid-area: top;
height: 100%;
width: 100vw;    
padding: 3vmin 1rem;
background-color: white;
z-index: 1000;

`