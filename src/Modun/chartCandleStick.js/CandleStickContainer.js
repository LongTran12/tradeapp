import React, { useContext } from "react";
import CandleStick from "../../component/chartCandleStick/CandleStick";
import TextHeader from "../../component/core/TextHeader";
import { AppContext } from "../../provider/appContext";
import styled from "styled-components";
const CandleStickContainer = () => {
  const { chart } = useContext(AppContext);
  return (
    <Wrap>
      <div className="stats-card-wrap mat-card">
        <TextHeader text="OTE Buy/Sell" />
        <CandleStick chart={chart} />
      </div>
    </Wrap>
  );
};

export default CandleStickContainer;
const Wrap = styled.div`
/* max-height:500px; */
`