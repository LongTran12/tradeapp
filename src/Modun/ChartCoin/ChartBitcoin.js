import React from 'react'
import ChartCoin from '../../component/chartCoin/ChartCoin';
import moment from 'moment';
import imgCoin from '../../assets/images/image1.png'

const ChartBitcoin = () => {
    const data = [
        {
            time: moment(1579341781000).format('DD/MM'), price: 2400
        },
        {
            time: moment(1579341781000).format('DD/MM'), price: 1398,
        },
        {
            time: moment(1579341781000).format('DD/MM'), price: 9800,
        },
        {
            time: moment(1579341781000).format('DD/MM'), price: 3908,
        },
        {
            time: moment(1579341781000).format('DD/MM'), price: 3908,
        },

    ];
    return (
        <>
            <ChartCoin data={data} coinName="Bitcoin" srcCoin={imgCoin} lineColor="#1565c0" />
        </>
    )
}

export default ChartBitcoin
