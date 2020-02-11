import React, { useState, useEffect } from "react";
import { contractPublic } from "./web3Public";
const AppContext = React.createContext();
export default ({ children }) => {
  const [appState, setAppState] = useState({
    oteSeller: 0,
    oteStacking: 0,
    otePrice: 0,
    chart: []
  });
  useEffect(() => {
    const getDetail = async () => {
      const [stacking, chart, price] = await Promise.all([
        contractPublic.methods.getStackingStats().call(),
        contractPublic.methods.getChart().call(),
        contractPublic.methods.getPrice().call()
      ]);
      let totalSeller = 0;
      chart.order.map(item => (totalSeller += Number(item)));
      setAppState({
        ...appState,
        otePrice: price,
        oteStacking: stacking.total / 10 ** 18,
        chart: chart,
        oteSeller: totalSeller / 10 ** 18,
        totalMemberStacking: stacking.totalMem
      });
    };
    getDetail();
  }, []);
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
export { AppContext };
