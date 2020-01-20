import React from 'react'
import styled from 'styled-components'
import TableTrade from '../../component/tableTrade/TableTrade'
import img1 from '../../assets/images/image8.png'
import TextHeader from '../../component/core/TextHeader'
import { FaPlus, FaMinus } from 'react-icons/fa'

const RecentTrade = () => {
    const rows = [
        {
            tokenIcon: img1,
            tokenName: "bitcoin",
            tokenStatus: true,
            tokenPrice: 100,
            total: 1000,

        },
        {
            tokenIcon: img1,
            tokenName: "bitcoin",
            tokenStatus: false,
            tokenPrice: 1000,
            total: 1000,
        },
        {
            tokenIcon: img1,
            tokenName: "bitcoin",
            tokenStatus: false,
            tokenPrice: 1000,
            total: 1000,
        },
        {
            tokenIcon: img1,
            tokenName: "bitcoin",
            tokenStatus: true,
            tokenPrice: 1000,
            total: 1000,

        },
        {
            tokenIcon: img1,
            tokenName: "bitcoin",
            tokenStatus: false,
            tokenPrice: 1000,
            total: 1000,
        },
        {
            tokenIcon: img1,
            tokenName: "bitcoin",
            tokenStatus: false,
            tokenPrice: 1000,
            total: 1000,
        },
    ]

    return (
        <div className="stats-card-wrap mat-card">

            <Wrap>
                <TextHeader text="RecentTrade" />
                <TableTrade rows={rows} />
                <BottomDown>
                    <div>
                        <span>Overall Profit: </span>
                        <span style={{ color: "#43a047" }}>
                            <FaPlus />
                            $35237
                        </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span>Overall Loss: </span>
                        <span style={{ color: "#e53935", display: "flex", alignItems: "center" }}>
                            <FaMinus />
                            $237
                        </span>
                    </div>
                    <div style={{ marginBottom: 10 }} />
                    <Button type="submit" >
                        <a href="#dfsf"> Download CSV</a>
                    </Button >
                </BottomDown>
            </Wrap>
        </div>
    )
}

export default RecentTrade
const Wrap = styled.div`

    .MuiTableCell-stickyHeader{
        min-width:unset !important;
    }
    .MuiPaper-root{
        box-shadow:unset;
        background-color:#fff;
    }
    .MuiTableCell-stickyHeader{
        background-color:#fff;
    }
    @media (max-width:414px){
    .MuiTableCell-root{
        padding:12px;
    }
    }
`
const BottomDown = styled.div`
    padding:20px 0 15px;
`

const Button = styled.button`
color:#fff;
       background-color: #1565c0;
       box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
       box-sizing: border-box;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    border: none;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    margin: 0;
    min-width: 64px;
    line-height: 36px;
    padding: 0 16px;
    border-radius: 4px;
    overflow: visible;
    transform: translate3d(0,0,0);
    font-size:14px;
`