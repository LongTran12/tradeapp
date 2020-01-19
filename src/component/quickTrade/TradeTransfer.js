import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import ExchangeRate from '../exchangeRate/ExchangeRate';

const TradeTransfer = () => {
    const dataCoin1 = [
        {
            name: "Bitcoin",
            value: '12'
        },
        {
            name: "ETh",
            value: '03'
        },
        {
            name: "OTC",
            value: 'fds'
        }
    ]
    const [coin, setCoin] = useState(`${dataCoin1[0].value}`)
    const handleChange = event => {
        setCoin(event.target.value);
    };

    return (
        <form>
            <Wrap>
                <ExchangeRate
                    inputLabel="Choose Currency"
                    dataSelect={dataCoin1}
                    value={coin}
                    handleChange={handleChange}
                />
                <span style={{ marginBottom: 30 }} />
                <TextField
                    id="outlined-helperText"
                    label="Select Amount"
                    defaultValue={300}
                    type="number"
                    variant="outlined"
                />
                <span style={{ marginBottom: 30 }} />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    defaultValue="1234"
                    variant="outlined"
                />
                <span style={{ marginBottom: 30 }} />
                <TextField
                    id="outlined-helperText"
                    label="Send To"
                    defaultValue="AXB35H24ISDJHCISDT"
                    type="text"
                    variant="outlined"
                />
                <span style={{ marginBottom: 30 }} />
                <Text>Total amount transfered 300 $ </Text>
                <span style={{ marginBottom: 10 }} />
                <WrapButton>
                    <Button type="submit">
                        Transfer
                </Button>
                    <span style={{ marginRight: 5 }} />
                    <Text>Transaction successfull</Text>
                </WrapButton>
            </Wrap>

        </form>
    )
}

export default TradeTransfer
const Wrap = styled.div`
    background:#fff;
    display:flex;
    flex-flow:column;
    .MuiOutlinedInput-input{
        padding:14px;
    }
`
const Text = styled.div`
    color:#43a047;
    text-align:left;
`
const WrapButton = styled.div`
    display:flex;
    align-items:center;
`
const Button = styled.button`
    color:#fff;
       background-color: #1565c0;
       box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
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
    transform: translate3d(0,0,0);
    font-size:14px;
`