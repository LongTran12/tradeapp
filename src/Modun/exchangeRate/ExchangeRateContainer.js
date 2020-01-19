import React, { useState } from 'react'
import styled from 'styled-components'
import ExchangeRate from '../../component/exchangeRate/ExchangeRate'
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import TextHeader from '../../component/core/TextHeader';


const useStyles = makeStyles(theme => ({
    root: {
        '& > span': {
            margin: theme.spacing(2),
        },
    },
}));

const ExchangeRateContainer = () => {
    const classes = useStyles();
    const dataCoin = [
        {
            name: "Bitcoin",
            value: 'df'
        },
        {
            name: "ETh",
            value: 'dsf'
        },
        {
            name: "OTCd",
            value: 'ds'
        }
    ]
    const dataCoinChange = [
        {
            name: "Bitcoin",
            value: 'df'
        },
        {
            name: "ETh",
            value: 'dsf'
        },
        {
            name: "OTCd",
            value: 'ds'
        },
        {
            name: "OTC",
            value: 'dsa'
        }
    ]
    const [coin, setCoin] = useState(`${dataCoin[0].value}`)
    const handleCoin = event => {
        setCoin(event.target.value);
    };
    const [coinChange, setCoinChange] = useState(`${dataCoinChange[0].value}`)
    const handleCoinChange = event => {
        setCoinChange(event.target.value);
    };
    return (
        <div>
            <TextHeader text="Exchange Rate" />
            <Wrap>
                <ExchangeRate inputLabel="Choose Currency"
                    dataSelect={dataCoin}
                    value={coin}
                    handleChange={handleCoin}
                />
                <WrapIcon className={classes.root}>
                    <Icon>swap_vert</Icon>
                </WrapIcon>
                <ExchangeRate
                    inputLabel="Choose Currency"
                    dataSelect={dataCoinChange}
                    value={coinChange}
                    handleChange={handleCoinChange}
                />
                <Text>
                    1 BTC = 0.45373 ETC
            </Text>
            </Wrap>
        </div>
    )
}

export default ExchangeRateContainer
const Wrap = styled.div`
    background:#fff;
    border-radius:0  0 10px 10px ;
    padding:25px 15px;
        display: flex;
    flex-flow: column;
    align-items: center;
    /* width:100%; */
`
const WrapIcon = styled.div``
const Text = styled.div`
    color:#43a047;
    text-align:left;
    margin-top:30px;
`