import { AvatarContainer, AvatarImg, HeaderContainer, LogoContainer, LogoImg } from "./HeaderStyle"
import logo from "../../assets/netflix-logo1.png"
import avatar from "../../assets/netflix-avatar.png"

export const Header = ({black}) => {

    return(
        <HeaderContainer black={black}>
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