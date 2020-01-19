import React from 'react'
import styled from 'styled-components'
import { IoIosCart, IoLogoUsd } from "react-icons/io";
import TradeBuy from '../../component/quickTrade/TradeBuy';
import TradeSell from '../../component/quickTrade/TradeSell';
import TradeTransfer from '../../component/quickTrade/TradeTransfer';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MdKeyboardTab } from "react-icons/md";
import TextHeader from '../../component/core/TextHeader';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <WrapTab>


            <Typography
                component="div"
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <Box p={3}>{children}</Box>}
            </Typography>
        </WrapTab>
    );
}

const QuickTrade = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <TextHeader text="Quick Trade" />
            <Wrap>
                <AppBar position="static" color="default">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                        <Tab label="Buy" icon={<IoIosCart />} />
                        <Tab label="Sell" icon={<IoLogoUsd />} />
                        <Tab label="Tranfer" icon={<MdKeyboardTab />} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <TradeBuy />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TradeSell />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <TradeTransfer />
                </TabPanel>
            </Wrap>
        </div>
    )
}

export default QuickTrade
const Wrap = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    .MuiTab-wrapper{
        flex-direction:row;
        align-items:center;
    }
    .MuiTab-labelIcon .MuiTab-wrapper > *:first-child{
        margin-bottom:0;
        margin-right:5px;
    }
    .MuiTab-labelIcon{
        min-height:48px;
    }
`
const WrapTab = styled.div`
    background:#fff;
    border-radius:0 0 10px 10px;
`
