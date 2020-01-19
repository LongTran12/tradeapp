import React from 'react'
import styled from 'styled-components'
import ChartBitcoin from './ChartBitcoin'
import ChartUSD from './ChartUSD'
import SliderCoinContainer from './SliderCoinContainer'

const ChartCoinContainer = () => {
    return (
        <Wrap>
            <SliderCoinContainer />
            <Row>
                <Col>
                    <ChartBitcoin />
                </Col>
                <Col>
                    <ChartUSD />
                </Col>
            </Row>
        </Wrap>
    )
}

export default ChartCoinContainer
const Wrap = styled.div`

`
const Row = styled.div`
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-column-gap:30px;
    /* display:flex;
    flex-flow:row wrap;
    margin:0 -15px; */
    @media (max-width:768px){
        grid-template-columns:1fr;
        grid-column-gap:0;
    }
    
`
const Col = styled.div`
    background:#fff;
    border-radius:5px;
    padding:15px;
    margin:15px 0;
    /* flex:1; */
    /* flex-basis:50%;
    margin:0 15px ;
    margin-bottom:30px; */
`