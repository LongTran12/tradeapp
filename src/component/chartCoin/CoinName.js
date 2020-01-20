import React from 'react'
import styled from 'styled-components'

const CoinName = ({ srcCoin, coinName, backgr }) => {
    return (
        <Wrap>
            <Image alt="coin" src={srcCoin} backgr={backgr} />
            <span style={{ marginRight: 10 }} />
            <Text>{coinName}</Text>
        </Wrap>
    )
}

export default CoinName
const Wrap = styled.div`
    display: flex;
    position: absolute;
    left: 0;
    z-index: 111;
    align-items:center;
`
const Text = styled.h2`
    font-size:24px;
    margin-bottom:0;
`
const Image = styled.img`
    width:40px;
    height:40px;
    svg{
        fill:${props => props.backgr}
    }
`