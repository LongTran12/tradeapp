import React from 'react'
import styled from 'styled-components'
import { FaArrowUp, FaArrowDown, FaMinus } from 'react-icons/fa'

const Coin = ({ coinGrow, coinValue, coinName }) => {
    let textGrow
    if (coinGrow === 0) {
        textGrow = (
            <RowDown color="#c5c712">
                <FaMinus />
                <span style={{ marginRight: 10 }} />
                <div>{coinGrow.toFixed(2)}%</div>
            </RowDown>
        )
    }
    if (coinGrow > 0) {
        textGrow = (
            <RowDown color="#43a047">
                <FaArrowUp />
                <span style={{ marginRight: 10 }} />
                <div>{coinGrow.toFixed(2)}%</div>
            </RowDown>
        )
    }
    if (coinGrow < 0) {
        textGrow = (
            <RowDown color="#e53935">
                <FaArrowDown />
                <span style={{ marginRight: 10 }} />
                <div>{coinGrow.toFixed(2)}%</div>
            </RowDown>
        )
    }
    return (
        <Wrap>
            {textGrow}
            <WrapInfo>
                <WrapCoin>{coinValue}</WrapCoin>
                <div>{coinName}</div>
            </WrapInfo>
        </Wrap>
    )
}

export default Coin
const Wrap = styled.div`
    display:flex;
    align-items:center;
    padding:20px 0;
`
const RowDown = styled.div`
    display:flex;
    position: relative;
    margin-right:15px;
    padding-right:15px;
    font-weight:bold;
    color:${props => props.color} !important;
    :before{
        content:'';
        width:1px;
        height:50px;
        background-color:#ccc;
        position:absolute;
        right:0;
        top:50%;
        transform:translateY(-50%);
    }
`
const WrapInfo = styled.div`
    color:#fff;
`
const WrapCoin = styled.div`
    margin-bottom:10px;
    font-weight:bold;
`