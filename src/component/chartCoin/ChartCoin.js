import React from 'react'
import {
    LineChart, Line, XAxis, Tooltip, Legend, ResponsiveContainer,
    Customized,
    Text,
    Label
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
                    <XAxis hide={true} dataKey="time" />
                    <Label value="Pages of my website" offset={0} position="insideBottom" />
                    <Legend content="2.3%" verticalAlign="bottom" height={36} />
                    <Line type="monotone" dataKey="price" stroke={lineColor} strokeWidth={3} />
                </LineChart>
            </ResponsiveContainer>
            <WrapText>
                <p>2.4%</p>
            </WrapText>
        </Wrap>
    )
}

export default ChartCoin
const WrapText = styled.div`
    position:absolute;
    bottom:0;
    left:0;
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