import React, { Component } from 'react'
import styled from 'styled-components'

export default class Footer extends Component{

    render(){

        return(
            <FooterWrapper />

        )
    }
}

const FooterWrapper = styled.section`
grid-area: footer;
height: 100vh;
width: 100vw;
`