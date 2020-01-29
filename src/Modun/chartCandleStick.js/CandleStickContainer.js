import React, { useContext } from "react";
import CandleStick from "../../component/chartCandleStick/CandleStick";
import TextHeader from "../../component/core/TextHeader";
import { AppContext } from "../../provider/appContext";
const CandleStickContainer = () => {
  const { chart } = useContext(AppContext);
  return (
    <div className="stats-card-wrap mat-card">
      <TextHeader text="OTE Buy/Sell" />
      <CandleStick chart={chart} />
    </div>
  );
};

export default CandleStickContainer;
