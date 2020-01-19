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
    border-bottom:1px solid #ccc;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    width:100%;
`
const WrapText = styled.div`
padding:15px 20px;
`