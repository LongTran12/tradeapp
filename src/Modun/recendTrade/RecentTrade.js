import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import TableTrade from "../../component/tableTrade/TableTrade";
import img1 from "../../assets/images/image8.png";
import TextHeader from "../../component/core/TextHeader";
import { contractPublic } from "../../provider/web3Public";
import img2 from "../../assets/images/image1.png";
import { Web3Context } from "../../provider/web3";
const RecentTrade = () => {
  const { address } = useContext(Web3Context);
  const [events, setEvents] = React.useState([]);
  useEffect(() => {
    address &&
      contractPublic &&
      contractPublic.getPastEvents(
        "allEvents",
        {
          fromBlock: 0,
          toBlock: "latest"
        },
        function(error, result) {
          if (!error) {
            let lastEvent = result
              .filter(
                item =>
                  item.returnValues["0"].toLowerCase() === address.toLowerCase()
              )
              .map(item => ({
                tokenIcon: item.returnValues.currency === "1" ? img1 : img2,
                tokenName: item.returnValues.currency === "1" ? "USDI" : "USDT",
                tokenStatus: item.event === "Buy",
                tokenPrice: item.returnValues.price / 10 ** 6,
                tokenAmount: item.returnValues.amount / 10 ** 18,
                total:
                  (item.returnValues.price / 10 ** 6) *
                  (item.returnValues.amount / 10 ** 18)
              }));
            setEvents(lastEvent);
          } else {
            console.log(error);
          }
        }
      );
  }, [address]);

  return (
    <div className="stats-card-wrap mat-card">
      <Wrap>
        <TextHeader text="RecentTrade" />
        <TableTrade rows={events} />
      </Wrap>
    </div>
  );
};

export default RecentTrade;
const Wrap = styled.div`
  .MuiTableCell-stickyHeader {
    min-width: unset !important;
  }
  .MuiPaper-root {
    box-shadow: unset;
    background-color: #fff;
  }
  .MuiTableCell-stickyHeader {
    background-color: #fff;
  }
  @media (max-width: 414px) {
    .MuiTableCell-root {
      padding: 12px;
    }
  }
`;
const BottomDown = styled.div`
  padding: 20px 0 15px;
`;

const Button = styled.button`
  color: #fff;
  background-color: #1565c0;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  position: relative;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  border: none;
  -webkit-tap-highlight-color: transparent;
  display: inline-block;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: baseline;
  text-align: center;
  margin: 0;
  min-width: 64px;
  line-height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  overflow: visible;
  transform: translate3d(0, 0, 0);
  font-size: 14px;
`;
