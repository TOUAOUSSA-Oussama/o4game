import React, {useState, useEffect} from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import {
    Nav, 
    NavbarContainer,
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks,
} 
    from './NavbarStyle';
import Logo from '../../assets/logo-2.png';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);    
    const closeMobileMenu = () => setClick(false);

    const handleClick = () => setClick(!click);

    // pour n'afficher le grand boutton que pour les garndes ecrans
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    return (
        <Nav>
            <NavbarContainer>
                {/* Logo + icone */}
                <NavLogo to="/" onClick={closeMobileMenu}> 
                    <img src={Logo} width="80"/>
                </NavLogo> 
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to="/">
                            Home
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/Historic">
                            Historic
                        </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/Setting">
                            Setting
                        </NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    );
};

export default Navbar;