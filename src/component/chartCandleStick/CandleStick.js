import React from "react";
import styled from "styled-components";
import { Bar } from "react-chartjs-2";

const CandleStick = ({ chart }) => {
  return (
    <Wrap>
      <Bar
        height={110}
        data={{
          labels: ["0.5$", "0.75$", "1$"],
          datasets: [
            {
              label: "Company",
              backgroundColor: "#3366ff",
              data:
                (chart &&
                  chart.company &&
                  chart.company.map(item => item / 10 ** 18)) ||
                []
            },
            {
              label: "Seller",
              backgroundColor: "#9966ff",
              data:
                (chart &&
                  chart.order &&
                  chart.order.map(item => item / 10 ** 18)) ||
                []
            }
          ]
        }}
        options={{
          tooltips: {
            mode: "index",
            intersect: false
          },
          // responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                stacked: true
              }
            ],
            yAxes: [
              {
                stacked: true
              }
            ]
          }
        }}
      />
    </Wrap>
  );
};

export default CandleStick;
const Wrap = styled.div`
  border-radius: 0 0 10px 10px;
  background: #fff;
  padding-bottom: 20px;
  @media (max-width: 991px) {
    /* padding:15px;    */
  }
`;
