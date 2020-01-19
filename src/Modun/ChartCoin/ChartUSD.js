import React from 'react'
import ChartCoin from '../../component/chartCoin/ChartCoin';
import moment from 'moment';
import imgCoin from '../../assets/images/image8.png'

const ChartUSD = () => {
    const data = [
        { time: moment(1579341781000).format('DD/MM'), price: 500 },
        { time: moment(1579341781000).format('DD/MM'), price: 2000 },
        { time: moment(1579341781000).format('DD/MM'), price: 1500 },
        { time: moment(1579341781000).format('DD/MM'), price: 2500 },
    ];
    return (
        <>
            <ChartCoin data={data} coinName="USD" srcCoin={imgCoin} lineColor="#e53935" />
        </>
    )
}

export default ChartUSD
