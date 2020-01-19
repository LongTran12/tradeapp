import React from 'react'
import SliderCoin from '../../component/chartCoin/SliderCoin'
import styled from 'styled-components'
import Coin from '../../component/chartCoin/slider/Coin'

const SliderCoinContainer = () => {
    const coinData = [
        {
            coinGrow: 12.3,
            coinValue: '$1231',
            coinName: 'OTE / USDT'
        },
        {
            coinGrow: -5.45,
            coinValue: '$1231',
            coinName: 'OTE / USDT'
        },
        {
            coinGrow: 0,
            coinValue: '$1231',
            coinName: 'OTE / USDT'
        },
        {
            coinGrow: 0,
            coinValue: '$1231',
            coinName: 'OTE / USDT'
        },
        {
            coinGrow: 1,
            coinValue: '$1231',
            coinName: 'OTE / USDT'
        },
        {
            coinGrow: 1,
            coinValue: '$1231',
            coinName: 'OTE / USDT'
        },

    ]
    return (
        <Wrap>
            <SliderCoin>
                {
                    coinData.map((index, i) =>
                        <Coin key={i} {...index} />
                    )
                }
            </SliderCoin>
        </Wrap>
    )
}

export default SliderCoinContainer
const Wrap = styled.div`
    background:#37474f;
    margin-bottom:30px;
    border-radius:10px;
`