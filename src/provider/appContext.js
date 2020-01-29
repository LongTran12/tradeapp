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
      setAppState({
        ...appState,
        otePrice: price,
        chart: chart
      });
    };
    getDetail();
  }, []);
  return <AppContext.Provider value={appState}>{children}</AppContext.Provider>;
};
export { AppContext };
