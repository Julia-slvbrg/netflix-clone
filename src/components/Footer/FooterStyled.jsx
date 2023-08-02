import styled from "styled-components";

export const FooterContainer = styled.div`
    height: 30vh;
    padding: 60px 280px 10px 260px;

    @media (max-width: 760px){
        //flex-direction: row;
        //flex-wrap: wrap;
        padding: 30px;
    }
`
export const IconContainer = styled.div`
    display: inline-block;
    margin-bottom: -5px;

    @media (max-width: 760px){
       margin-bottom: 10px;
    }
`
export const Icon = styled.svg`
    padding-right: 25px;
`
export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 100px;
    font-size: 13px;
    line-height: 13px;

    @media (max-width: 760px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 80px 100px;
        row-gap: 0px;
        column-gap: 40px;
        align-content: stretch;
    }
`
export const FirstRow = styled.div`
    @media (max-width: 760px){
        grid-column: 1/2;
        grid-row: 1/2; 
    }
`
export const SecondRow = styled.div`
    @media (max-width: 760px){
        grid-column: 2/3;
        grid-row: 1/2; 
    }
`
export const ThirdRow = styled.div`
    @media (max-width: 760px){
        grid-column: 1/2;
        grid-row: 2/3; 
        margin-top: -1px;
    }
`
export const FourthRow = styled.div`
    @media (max-width: 760px){
        grid-column: 2/3;
        grid-row: 2/3; 
        margin-top: -1px;
    }
`
export const Anchor = styled.a`
    text-decoration: none;
    color: #6a6a6a;

    &:hover{
        cursor: pointer
    };
    &:active{
        text-decoration: underline;
        color: #FFF;
    }
`


