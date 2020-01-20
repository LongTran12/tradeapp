import React from 'react'
import {
    LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer,
    Customized,
    Text,
    Label
} from 'recharts';
import styled from 'styled-components';
import CoinName from './CoinName';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const ChartCoin = ({ data, srcCoin, coinName, lineColor, perGrow }) => {
    return (
        <Wrap>
            <ResponsiveContainer width="100%" height={326}>
                <LineChart data={data}>
                    <div style={{ padding: 100 }} />
                    <Customized component={<CoinName />} />
                    <Tooltip />
                    <Legend content={<CoinName srcCoin={srcCoin} coinName={coinName} />} verticalAlign="top" height={36} />
                    <XAxis hide={true} dataKey="time" />
                    <Label value="Pages of my website" offset={0} position="insideBottom" />
                    <Legend content="2.3%" verticalAlign="bottom" height={36} />
                    <Line type="monotone" dataKey="price" stroke={lineColor} strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
            <WrapText>
                <Button type="submit">
                    last 4 day
                </Button>
                {
                    perGrow > 0 ?
                        <p style={{ fontWeight: "bold", color: "#43a047" }}> <FaArrowUp />{perGrow}%</p> :
                        <p style={{ fontWeight: "bold", color: "#e53935" }}> <FaArrowDown />{perGrow}%</p>
                }
            </WrapText>
        </Wrap>
    )
}

export default ChartCoin
const WrapText = styled.div`
    position:absolute;
    bottom:0;
    left:0;
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
`
const Wrap = styled.div`
    background-color:#fff;
    position: relative;
    width: 100%;
     height: 100%;
     display:flex;
    .recharts-text{
        font-size:10px;
    }
`
const Button = styled.button`
color:#fff;
    background-color: #e0e0e0!important;
    color: rgba(0,0,0,.87)!important;
        border-radius: 5px;
    padding: 4px 9px;
    font-size: .8rem;
    border:0;
`