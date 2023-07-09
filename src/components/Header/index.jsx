import { AvatarContainer, AvatarImg, HeaderContainer, LogoContainer, LogoImg } from "./HeaderStyle"
import logo from "../../assets/netflix-logo.png"
import avatar from "../../assets/netflix-avatar.png"
export const Header = () => {
    return(
        <HeaderContainer>
            <LogoContainer>
                <LogoImg src={logo} />
            </LogoContainer>
            <AvatarContainer>
                <AvatarImg src={avatar} />
            </AvatarContainer>
            
        </HeaderContainer>
    )
}

export default Header