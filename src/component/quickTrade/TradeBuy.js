import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import ExchangeRate from "../exchangeRate/ExchangeRate";
import { AppContext } from "../../provider/appContext";
import { Web3Context } from "../../provider/web3";
import { usdtPublic, usdiPublic } from "../../provider/web3Public";
import { config } from "../../config";
import { message } from "antd";
const TradeBuy = () => {
  const { otePrice } = useContext(AppContext);
  const { contract, address, usdt, usdi } = useContext(Web3Context);
  const dataCoin = [
    {
      name: "USDI",
      value: 1
    },
    {
      name: "USDT",
      value: 2
    }
  ];
  const [coin, setCoin] = useState(`${dataCoin[0].value}`);
  const handleChange = event => {
    setCoin(event.target.value);
  };

  const [amount, setAmount] = useState(100);
  const buyOTE = async () => {
    let allow = 0;
    if (Number(coin) === 1) {
      allow = await usdiPublic.methods.allowance(address, config.oteex).call();
    } else {
      allow = await usdtPublic.methods.allowance(address, config.oteex).call();
    }
    console.log("check", allow, otePrice * amount);
    if (allow >= otePrice * amount) {
      contract.buyOTE(amount * 10 ** 18, coin, { value: 0 }, err => {
        if (err) {
          console.log(err.message);
          message.error(err.message);
        } else {
          console.log("Buy success!");
          message.info("Buy success!");
        }
      });
    } else {
      if (Number(coin) === 1) {
        usdi.approve(config.oteex, otePrice * amount, { value: 0 }, err => {
          if (err) {
            console.log(err.message);
            message.error(err.message);
          } else {
            console.log("Approve success!");
            message.info("Approve success!");
            const hide = message.loading("Action in progress..", 0);
            checkAndBuy(hide);
          }
        });
      } else {
        usdt.approve(config.oteex, otePrice * amount, { value: 0 }, err => {
          if (err) {
            console.log(err.message);
            message.error(err.message);
          } else {
            console.log("Approve success!");
            message.info("Approve success!");
            const hide = message.loading("Action in progress..", 0);
            checkAndBuy(hide);
          }
        });
      }
    }
  };

  const checkAndBuy = async hide => {
    console.log("checkandBuy");
    let allow = 0;
    if (Number(coin) === 1) {
      allow = await usdiPublic.methods.allowance(address, config.oteex).call();
    } else {
      allow = await usdtPublic.methods.allowance(address, config.oteex).call();
    }
    console.log("check", allow, otePrice * amount);
    if (allow >= otePrice * amount) {
      hide && hide();
      contract.buyOTE(amount * 10 ** 18, coin, { value: 0 }, err => {
        if (err) {
          console.log(err.message);
          message.error(err.message);
        } else {
          message.info("Buy success!");
          console.log("Buy success!");
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
        inputLabel="Choose Currency"
        dataSelect={dataCoin}
        value={coin}
        handleChange={handleChange}
      />
      <span style={{ marginBottom: 30 }} />
      <TextField
        id="outlined-helperText"
        label="Select Amount"
        value={amount}
        onBlur={e => {
          if (e.target.value < 100) {
            setAmount(100);
            alert("Must be bigger than 100 OTE");
          }
        }}
        onChange={e => setAmount(e.target.value)}
        type="number"
        variant="outlined"
      />
      <span style={{ marginBottom: 30 }} />
      <Text>Total amount is {(otePrice / 10 ** 6) * amount}$ </Text>
      <span style={{ marginBottom: 10 }} />
      <WrapButton>
        <Button
          onClick={() => {
            buyOTE();
          }}
        >
          Purchase
        </Button>
      </WrapButton>
    </Wrap>
  );
};

export default TradeBuy;
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
