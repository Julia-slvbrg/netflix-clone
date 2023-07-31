import styled from "styled-components";

export const HeaderContainer = styled.header`
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 58px;
    background: ${(props)=> (props.black)? 'null' : 'transparent' };
    background-color: ${(props)=> (props.black)? '#080808' : 'null' };
    transition: all ease .5s;

    @media (max-width: 760px) {
        padding: 0 20px;
    }
`
export const LogoContainer = styled.div`
    height: 30px;
`
export const LogoImg = styled.img`
    height: 100%;
`
export const AvatarContainer = styled.div`
    height: 40px;
`
export const AvatarImg = styled.img`
    height: 100%;
    border-radius: 3px;
`