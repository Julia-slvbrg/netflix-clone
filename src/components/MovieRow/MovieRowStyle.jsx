import styled from "styled-components";

export const MovieRowContainer = styled.div`
    margin-bottom: 30px;
`

export const CategoryTitle = styled.h2`
    margin: 0 0 0 30px;
`
export const ListAreaContainer = styled.div`
    overflow-x: hidden; //significa que tudo que passar do limite da tela na horizontal será cortado
    padding-left: 30px;
`

export const ListContainer = styled.div`
    width: 9999999999px;
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