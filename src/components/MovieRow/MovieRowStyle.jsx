import styled from "styled-components";

export const MovieRowContainer = styled.div`
    margin-bottom: 30px;
`
export const CategoryTitle = styled.h2`
    margin: 0 0 0 30px;
`
export const NavLeftIcon = styled.div`
    position: absolute;
    left: 0;
    width: 40px;
    height: 225px;    
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.363);
    cursor: pointer;
    opacity: 0;
    transition: all ease .5s;
    //VER COMO VAI FAZER COM ESSA SETINHA
    /* background: linear-gradient(to right, #111 10%, transparent 90%); */

    ${MovieRowContainer}:hover & {
        opacity: 1;
    };

`
export const NavRightIcon = styled.div`
    position: absolute;
    right: 0;
    width: 60px;
    height: 225px;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    opacity: 0;
    transition: all ease .5s;
    background: linear-gradient(to left, #111 20%, transparent 80%);

    ${MovieRowContainer}:hover & {
        opacity: 1;
    };

`
export const IconRow = styled.span`
    scale: 2;
`
export const ListAreaContainer = styled.div`
    overflow-x: hidden; //significa que tudo que passar do limite da tela na horizontal será cortado
    padding-left: 30px;
`
export const ListContainer = styled.div`
    transition: all ease .5s;
`
export const ItemContainer = styled.div`
    display: inline-block;
    width: 150px;
`
export const Img = styled.img`
    width: 100%;
    transform: scale(.9);
    
    &:hover{
        transform: scale(1);
        transition: all ease 0.3s;
    }
`

