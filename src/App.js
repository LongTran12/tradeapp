import React, { useContext } from "react";
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
import { Web3Context } from "./provider/web3";

function App() {
  const { web3 } = useContext(Web3Context);
  console.log(web3);
  return (
    <div className="app .sidebar-color-dark header-color-dark side-panel-opened collapsed-sidebar">
      <div className="mat-drawer-backdrop ng-star-inserted"></div>
      <div
        className="cdk-visually-hidden cdk-focus-trap-anchor"
        aria-hidden="true"
      ></div>
      <Menu />
      <Site className="mat-drawer-content mat-sidenav-content ng-star-inserted">
        {/* <div className="gene-header-toolbar mat-toolbar mat-toolbar-single-row">
                    <div className="gene-ham-icon">
                        <button class="mat-mini-fab mat-button-base mat-primary" color="primary" mat-card-icon="" mat-mini-fab="">
                            <span class="mat-button-wrapper">
                                <mat-icon class="mat-icon notranslate material-icons mat-icon-no-color" role="img" aria-hidden="true">menu</mat-icon>
                            </span>
                            <div class="mat-button-ripple mat-ripple mat-button-ripple-round"></div><div class="mat-button-focus-overlay">
                            </div>
                        </button>
                    </div>
                </div> */}

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
