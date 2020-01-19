import React from 'react'
import ReactEcharts from 'echarts-for-react';
import styled from 'styled-components';


const CandleStick = ({ rawData }) => {

    var dates = rawData.map(function (item) {
        return item[0];
    });

    var data = rawData.map(function (item) {
        return [+item[1], +item[2], +item[5], +item[6]];
    });
    const option = {
        backgroundColor: '#fff',
        legend: {
            data: ['BTC', 'USD',],
            inactiveColor: '#777',
            textStyle: {
                color: '#111'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                animation: false,
                type: 'cross',
                lineStyle: {
                    color: '#376df4',
                    width: 2,
                    opacity: 1
                }
            }
        },
        xAxis: {
            type: 'category',
            data: dates,
            axisLine: { lineStyle: { color: '#8392A5' } }
        },
        yAxis: {
            scale: true,
            axisLine: { lineStyle: { color: '#8392A5' } },
            splitLine: { show: false }
        },
        grid: {
            bottom: 80
        },
        dataZoom: [{
            textStyle: {
                color: '#8392A5'
            },
            handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
            handleSize: '80%',
            dataBackground: {
                areaStyle: {
                    color: '#8392A5'
                },
                lineStyle: {
                    opacity: 0.8,
                    color: '#8392A5'
                }
            },
            handleStyle: {
                color: '#fff',
                shadowBlur: 3,
                shadowColor: 'rgba(0, 0, 0, 0.6)',
                shadowOffsetX: 2,
                shadowOffsetY: 2,
            }
        }, {
            type: 'inside'
        }],
        animation: false,
        series: [
            {
                type: 'candlestick',
                name: 'BTC',
                data: data,
                itemStyle: {
                    color: '#0CF49B',
                    color0: '#FD1050',
                    borderColor: '#0CF49B',
                    borderColor0: '#FD1050'
                }
            },
        ]
    };
    return (
        <Wrap>
            <ReactEcharts
                option={option}
                style={{ height: '500px', width: '100%' }}
                className='react_for_echarts' />
        </Wrap>
    )
}

export default CandleStick
const Wrap = styled.div`
    border-radius:0 0 10px 10px;
    background:#fff;
    padding-bottom:20px;
    @media (max-width:991px){
         /* padding:15px;    */
    }
`