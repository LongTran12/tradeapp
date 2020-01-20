import React from 'react'
import styled from 'styled-components'

const TextHeader = ({ text }) => {
    return (
        <Wrap>
            <WrapText>
                {text}

            </WrapText>
        </Wrap>
    )
}

export default TextHeader
const Wrap = styled.div`
    color:#37474f;
    font-weight:bold;
    background:#fff;
    /* border-bottom:1px solid #ccc; */
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    width:100%;
    position:relative;
`
const WrapText = styled.div`
    padding:10px 0 15px;
    margin-bottom:15px;
    font-size:1.125rem;
    :before{
        position:absolute;
    content:'';
        height:1px;
        width:calc(100% + 3rem);
        left:-1.5rem;
         bottom:0;
         background:rgba(0,0,0,.12);
    }

`