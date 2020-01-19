import React from 'react';
import styled from 'styled-components';
import ChartCoinContainer from './Modun/ChartCoin/ChartCoinContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CandleStickContainer from './Modun/chartCandleStick.js/CandleStickContainer';
import TableHistory from './component/tableHistory/Table';
import ExchangeRateContainer from './Modun/exchangeRate/ExchangeRateContainer';
import RecentTrade from './Modun/recendTrade/RecentTrade';
import QuickTrade from './Modun/quickTrade/QuickTrade';
import Menu from './component/menu/Menu';


function App() {
    return (
        <Site>

            <Menu />

            <Wrap>
                <ChartCoinContainer />
            </Wrap>
            <Wrap>
                <CandleStickContainer />
            </Wrap>
            <Wrap>
                <TableHistory />
            </Wrap>
            <Wrap>
                <Row>
                    <Column>
                        <ExchangeRateContainer />
                    </Column>
                    <Column>
                        <QuickTrade />
                    </Column>
                    <Column>
                        <RecentTrade />
                    </Column>
                </Row>
            </Wrap>
        </Site>
    );
}

export default App;
const Site = styled.div`
    padding:6em 10em 0 10em;
    
    @media (max-width:1280px){
        padding:6em 30px 0 30px;
    }
    @media (max-width:991px){
        padding:6em 30px 0 30px;
    }
    @media (max-width:425px){
        .MuiFormControl-root{
        min-width:200px;
    }
    }
`

const Wrap = styled.div`
    margin-bottom:50px;
`
const Row = styled.div`
    display:grid;
    /* grid-template-columns:1fr 1fr 1fr;
    grid-column-gap:30px; */
    display:flex;
    flex-flow:row wrap;
    margin:0 -15px;
    /* width:100%; */
    @media (max-width:991px){
         margin:0;   
    }
`
const Column = styled.div`
    margin:15px;
    flex:1;
    @media (max-width:991px){
         margin:15px 0;   
    }
`
