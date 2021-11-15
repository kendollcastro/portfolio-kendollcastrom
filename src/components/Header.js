import React, { useState } from "react";
import styled from "styled-components";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssignmentIndRoundedIcon from '@mui/icons-material/AssignmentIndRounded';
import WorkRoundedIcon from '@mui/icons-material/WorkRounded';
import MailRoundedIcon from '@mui/icons-material/MailRounded';
import { Link } from "react-router-dom";


function Header() {

    const values = {
        logo: "/./img/logo.svg"
    }

    const [menuStatus, setMenuStatus] = useState()
    return(
        <HeaderWrapper>
            <HeaderContent>
                <WrapperLogo>
                    <Link to="/">
                        <img src={values.logo} alt="Logo del sitio"/>
                    </Link>
                </WrapperLogo>
                <HeaderNav>
                    <Link to="/">Home</Link>
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/">Portfolio</Link>
                    <Link to="/">Contact</Link>
                </HeaderNav>
                <MenuIcon fontSize="large" onClick={() => setMenuStatus(true)} />
            </HeaderContent>
            <MenuWrapper show={menuStatus}>
                <MenuNav>
                    <CloseMenu>
                        <CloseIcon fontSize="large" onClick={() => setMenuStatus(false)}/>
                    </CloseMenu>
                    <AnchorsWrapper>
                        <Link to="/"><HomeRoundedIcon fontSize="large"/>Home</Link>
                        <Link to="/"><AssignmentIndRoundedIcon fontSize="large"/>About Me</Link>
                        <Link to="/"><WorkRoundedIcon fontSize="large"/>Portfolio</Link>
                        <Link to="/"><MailRoundedIcon fontSize="large"/>Contact</Link>
                    </AnchorsWrapper>
                </MenuNav>
            </MenuWrapper>
        </HeaderWrapper>
    )
}

export default Header;

const HeaderWrapper = styled.div`
    align-items: center;
    background-color: black;
    display: flex;
    flex-direction: column;
    height: 80px;
    justify-content: center;
    width: 100%;
`
const HeaderContent = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-between;
    width: 343px;

    @media (min-width: 768px) {
        width: 736px;
    }
    @media (min-width: 1440px) {
        width: 1140px;
    }

    svg{
        @media (min-width: 1440px) {
            display: none;
        }
    }
`

const WrapperLogo = styled.div`

`

const HeaderNav = styled.div`
    display: none;
    justify-content: space-between;
    width: 35%;

    a {
        color: white;
        font-family: "Poppins";
        font-size: 18px;
        text-decoration: none;
    }
    a::after {
        background-color: white;
        content: "";
        display: block;
        height: 2px;
        transition: width 0.3s;
        width: 0;
    }
    a:hover::after {
        transition: width 0.3s;
        width: 100%;
    }
    @media (min-width: 1440px) {
        a {
        display: block;
        }
    }
    @media (min-width: 1440px) {
        display: flex;
    }
`
const MenuWrapper = styled.div`
    background: black;
    bottom: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 20px;
    position: fixed;
    right: 0;
    text-align: start;
    top: 0;
    transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.2s;
    z-index: 16;
    @media (min-width: 834px) {
        width: 375px;
    }
    @media (min-width: 1440px) {
        display: none;
    }
`
const MenuNav = styled.div`
    margin: 8px auto;
    width: 343px;
`
const CloseMenu = styled.div`
    display: flex;
    justify-content: flex-end;
`

const AnchorsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 32px auto;

    a{
        align-items: center;
        border-radius: 5px;
        border: 1px solid white;
        color: white;
        display: flex;
        font-family: "Poppins";
        font-size: 20px;
        margin-bottom: 32px;
        padding: 12px;
        text-decoration: none;
        width: 93%;
    }
    svg{
        margin-left: 100px;
        margin-right: 16px;
    }

`
const CloseIcon = styled(CloseRoundedIcon)`
    color: white;
`
const MenuIcon = styled(MenuRoundedIcon)`
    color: white;
`
