import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import ExchangeRate from "../exchangeRate/ExchangeRate";
import { Web3Context } from "../../provider/web3";
import { otePublic } from "../../provider/web3Public";
import { config } from "../../config";
import { message } from "antd";
const TradeTransfer = () => {
  const { contract, address, ote } = useContext(Web3Context);
  const [amount, setAmount] = useState(100);
  const dataTerm = [
    {
      name: "6 months",
      value: 6
    },
    {
      name: "12 months",
      value: 12
    },
    {
      name: "18 months",
      value: 18
    }
  ];
  const [term, setTerm] = useState(`${dataTerm[0].value}`);
  const handleChange = event => {
    setTerm(event.target.value);
  };
  const stackingOTE = async () => {
    let allow = await otePublic.methods.allowance(address, config.oteex).call();
    if (allow >= amount * 10 ** 18) {
      contract.stackingOTE(amount * 10 ** 18, term, { value: 0 }, err => {
        if (err) {
          console.log(err.message);
          message.error(err.message);
        } else {
          message.info("Stacking success!");
          console.log("Stacking success!");
        }
      });
    } else {
      ote.approve(config.oteex, amount * 10 ** 18, { value: 0 }, err => {
        if (err) {
          console.log(err.message);
          message.error(err.message);
        } else {
          message.info("Approve success!");
          const hide = message.loading("Action in progress..", 0);
          console.log("Approve success!");
          checkAndBuy(hide);
        }
      });
    }
  };

  const checkAndBuy = async hide => {
    console.log("checkandBuy");
    let allow = await otePublic.methods.allowance(address, config.oteex).call();
    if (allow >= amount * 10 ** 18) {
      hide && hide();
      contract.stackingOTE(amount * 10 ** 18, term, { value: 0 }, err => {
        if (err) {
          console.log(err.message);
          message.error(err.message);
        } else {
          message.info("Stacking success!");
          console.log("Stacking success!");
        }
      });
    } else {
      setTimeout(() => {
        checkAndBuy(hide);
      }, 1000);
    }
  };
  return (
    <Wrap>
      <ExchangeRate
        inputLabel="Choose Term"
        dataSelect={dataTerm}
        value={term}
        handleChange={handleChange}
      />
      <span style={{ marginBottom: 30 }} />
      <TextField
        id="outlined-helperText"
        label="Select Amount"
        defaultValue={amount}
        onChange={e => setAmount(e.target.value)}
        onBlur={e => {
          if (e.target.value < 100) {
            setAmount(100);
            alert("Must be bigger than 100 OTE");
          }
        }}
        type="number"
        variant="outlined"
      />
      <span style={{ marginBottom: 10 }} />
      <WrapButton>
        <Button
          onClick={() => {
            stackingOTE();
          }}
        >
          Stacking
        </Button>
      </WrapButton>
    </Wrap>
  );
};

export default TradeTransfer;
const Wrap = styled.div`
  background: #fff;
  display: flex;
  flex-flow: column;
  .MuiOutlinedInput-input {
    padding: 14px;
  }
`;
const Text = styled.div`
  color: #43a047;
  text-align: left;
`;
const WrapButton = styled.div`
  display: flex;
  align-items: center;
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
