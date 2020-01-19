import React, { useState } from 'react'
import styled from 'styled-components';

import { FaAlignJustify, FaCcVisa } from 'react-icons/fa';
const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <Wrap>
            <IconMenu onClick={() => setOpen(!open)}>
                <FaAlignJustify />
            </IconMenu>
            {
                open &&
                <>
                    <Tabbar>
                        <Ul>
                            <Li>
                                <FaAlignJustify />
                                <span style={{ marginRight: 8 }} ></span>
                                <div>Crypto</div>
                            </Li>
                            <Li>
                                <FaCcVisa />
                                <span style={{ marginRight: 8 }} ></span>
                                <div>Bitcon Daily</div>
                            </Li>
                        </Ul>
                    </Tabbar>
                    <CloseElement onClick={() => setOpen(false)} />
                </>

            }
        </Wrap>
    )
}

export default Menu
const Ul = styled.ul`
    padding-top:7em;
`
const Li = styled.li`
    display:flex;
    align-items:center;
    color:#fff;
        padding: 20px 25px;
   
    :hover{
        opacity:0.8;
         background: #0c0f2c;
    }
`
const CloseElement = styled.div`
    position:fixed;
    left:0;
    top:0;
    z-index:1198;
    background:rgba(0,0,0,.5);
    width:100vw;
    height:100vw;
`
const Wrap = styled.div``
const Tabbar = styled.div`
    position:fixed;
    width:256px;
    height:100vh;
    background:#18206f;
    top:0;
    left:0;
    z-index:1199;
    transition: all .7s ease;
`
const IconMenu = styled.div`
    position:fixed;
    left:10em;
    top:1.5em;
    width:50px;
    height:50px;
    border-radius:999px;
    cursor: pointer;
    z-index:1200;
    background:#18206f;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
    svg{
        fill:#fff;  
        width:20px;
        height:20px;
    }
    @media (max-width:1280px){
       left:30px;
    }
`