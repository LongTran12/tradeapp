import React from 'react'
import styled from 'styled-components'
import TableTrade from '../../component/tableTrade/TableTrade'
import img1 from '../../assets/images/image8.png'
import TextHeader from '../../component/core/TextHeader'

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
        <Wrap>
            <TextHeader text="RecentTrade" />
            <TableTrade rows={rows} />
        </Wrap>
    )
}

export default RecentTrade
const Wrap = styled.div`
box-shadow:0 0 10px rgba(0,0,0,.2);
.MuiTableCell-stickyHeader{
        min-width:unset !important;
    }
    @media (max-width:414px){
    .MuiTableCell-root{
        padding:12px;
    }
    }
`