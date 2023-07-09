import styled from "styled-components";

export const FeaturedContainder = styled.section`
    height: 100vh; 
`
export const VerticalTransparencie = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);
`
export const HorizontalTransparencie = styled.div`
    width: inherit;
    height: inherit;
    background: linear-gradient(to right, #111111c1 10%, transparent 90%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px 0 150px 30px;
`
export const Name = styled.div`
    font-size: 60px;
    font-weight: bold;
`
export const Info = styled.div`
    font-size: 18px;
    font-weight: bold;
    margin-top: 15px;
`
export const Rating = styled.div`
    display: inline-block;
    color: #46d369;
    margin-right: 15px;
`

export const Year = styled.div`
    display: inline-block;
    margin-right: 15px;
`
export const Seasons = styled.div`
    display: inline-block;
`
export const Description = styled.div`
    margin-top: 15px;
    font-size: 20px;
    color: #999;
    max-width: 45%;
   // max-height: 80%;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
            line-clamp: 4;
    -webkit-box-orient: vertical;
`

export const ButtonsContainer = styled.div`
    margin-top: 15px;
` 

export const WatchBtn = styled.button`
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 15px, 25px;
    border-radius: 5px;
    margin-right: 10px;
    background-color: #FFF;
    width: 145px;
    height: 50px;
    color: #000;
    opacity: 1;
    transition: all ease .2s;
    
    &:hover{
        cursor: pointer;
        opacity: .7;
    };
    &:active{
        cursor: pointer;
    }
` 

export const PlayIcon = styled.svg`
    scale: 2.2;
    margin-right: 18px;
`

export const AddListBtn = styled.button`
   display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 15px, 25px;
    border-radius: 5px;
    margin-right: 10px;
    background-color: #333;
    color: white;
    width: 165px;
    height: 50px;
    opacity: 1;
    transition: all ease .2s;

    &:hover{
        cursor: pointer;
        opacity: .7;
    };
    &:active{
        cursor: pointer;
    }
` 
export const PlusIcon = styled.svg`
    scale: 2.7;
    margin-right: 18px;
`

export const Genres = styled.div`
    margin-top: 15px;
    font-size: 18px;
    color: #999;
`