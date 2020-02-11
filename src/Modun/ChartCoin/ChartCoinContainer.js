import React, { useContext } from "react";
import styled from "styled-components";
import StatsItem from "../../component/StatsItem";
import { AppContext } from "../../provider/appContext";
const ChartCoinContainer = () => {
  const { oteSeller, oteStacking, otePrice, totalMemberStacking } = useContext(
    AppContext
  );
  return (
    <Row>
      <StatsItem bg="warn" number={oteSeller} title="Sell Order" />
      <StatsItem bg="accent" number={oteStacking} title="Stacking" />
      <StatsItem bg="success" number={otePrice / 10 ** 6} title="OTE Price" />
      <StatsItem
        bg="primary"
        number={totalMemberStacking}
        title="Total Member"
      />
    </Row>
  );
};

export default ChartCoinContainer;
const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0;
  }
`;
const Col = styled.div`
  background: #fff;
  border-radius: 5px;
  padding: 15px;
  margin: 15px 0;
  /* flex:1; */
  /* flex-basis:50%;
    margin:0 15px ;
    margin-bottom:30px; */
`;
