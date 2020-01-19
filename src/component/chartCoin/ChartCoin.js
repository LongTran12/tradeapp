import React from 'react'
import {
    LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer,
    Customized
} from 'recharts';
import styled from 'styled-components';
import CoinName from './CoinName';

const ChartCoin = ({ data, srcCoin, coinName, lineColor }) => {
    return (
        <Wrap>
            <ResponsiveContainer width="100%" height={326}>
                <LineChart data={data}>
                    <div style={{ padding: 100 }} />
                    <Customized component={<CoinName />} />
                    <Tooltip />
                    <Legend content={<CoinName srcCoin={srcCoin} coinName={coinName} />} verticalAlign="top" height={36} />
                    <XAxis dataKey="time" />
                    <Line type="monotone" dataKey="price" stroke={lineColor} strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
        </Wrap>
    )
}

export default ChartCoin
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