import React from 'react'
import styled from 'styled-components'
import {useTema} from './context'
 function Container (props: any){
    const DivContainer = styled.div`
    display: grid;
    grid-template: auto 120px / 100%;
    height: 100%;
    width: 100%;
    position: absolute;
    background: ${props => props.background || 'white'};
    `
    return(
    <DivContainer background={useTema().background}>
        {props.children}
    </DivContainer>
    )
}
export default Container