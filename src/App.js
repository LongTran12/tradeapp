import React from "react";
import styled from "styled-components";
import ChartCoinContainer from "./Modun/ChartCoin/ChartCoinContainer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CandleStickContainer from "./Modun/chartCandleStick.js/CandleStickContainer";
import TableHistory from "./component/tableHistory/Table";
import ExchangeRateContainer from "./Modun/exchangeRate/ExchangeRateContainer";
import RecentTrade from "./Modun/recendTrade/RecentTrade";
import QuickTrade from "./Modun/quickTrade/QuickTrade";
import Menu from "./component/menu/Menu";
function App() {
  return (
    <div className="app .sidebar-color-dark header-color-dark side-panel-opened collapsed-sidebar">
      <div className="mat-drawer-backdrop ng-star-inserted"></div>
      <div
        className="cdk-visually-hidden cdk-focus-trap-anchor"
        aria-hidden="true"
      />
      <Menu />
      <Site className="mat-drawer-content mat-sidenav-content ng-star-inserted">
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
            {/* <Column>
              <ExchangeRateContainer />
            </Column> */}
            <Column>
              <QuickTrade />
            </Column>
            <Column>
              <RecentTrade />
            </Column>
          </Row>
        </Wrap>
      </Site>
    </div>
  );
}

export default App;
const Site = styled.div`
  padding: 6em 25px 0 5px;

  @media (max-width: 1280px) {
    padding: 6em 60px 0 25px;
  }
  @media (max-width: 991px) {
    padding: 6em 30px 0 30px;
  }
  @media (max-width: 425px) {
    .MuiFormControl-root {
      min-width: 200px;
    }
  }
`;

const Wrap = styled.div`
  margin-bottom: 50px;
`;
const Row = styled.div`
  display: grid;
  /* grid-template-columns:1fr 1fr 1fr;
    grid-column-gap:30px; */
  display: flex;
  flex-flow: row wrap;
  /* width:100%; */
  @media (max-width: 991px) {
    margin: 0;
  }
`;
const Column = styled.div`
  flex: 1;
`;
