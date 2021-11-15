import React from "react";
import styled from "styled-components";

function Hero({title, subtitle, backgroundImage}) {
    return (
        <HeroWrapper>
            <HeroContent bgImage={backgroundImage}>
                <HeroInfo>
                    <HeroTitle>
                        <h1>{title}</h1>
                        <p>{subtitle}</p>
                    </HeroTitle>
                </HeroInfo>
            </HeroContent>
        </HeroWrapper>
    )
}

export default Hero;

const HeroWrapper = styled.div`
    background-color: black;
    width: 375px;

    @media (min-width: 768px) {
        width: 736px;
        margin: 0 auto;
    }
    @media (min-width: 1440px) {
        width: 1140px;
    }

`
const HeroContent = styled.div`
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    height: 550px;
    margin: 0 auto;
    
    @media (min-width: 768px) {
        background-position: right;
    }
    @media (min-width: 1440px) {
        background-position: top 40px right;
    }

`
const HeroTitle = styled.div`
    display: flex;
    flex-direction: column;
    height: 90%;
    justify-content: flex-end;

    h1{
        color: white;
        font-family: "Poppins";
        margin: 0;

        @media (min-width: 1440px) {
            font-size: 70px;
        }
    }
    p {
        color: white;
        font-family: 'Raleway', sans-serif;
        font-size: 18px;
        margin: 0;

        @media (min-width: 1440px) {
            font-size: 34px;
        }
    }
`

const HeroInfo = styled.div`
    margin: 0 auto;
    padding-top: 350px;
    width: 343px;

    @media (min-width: 768px) {
        margin: 0 auto;
        padding-top: 400px;
        width: 736px;
    }
    @media (min-width: 1440px) {
        margin: 0 auto;
        padding-top: 400px;
        width: 1140px;
    }
`
