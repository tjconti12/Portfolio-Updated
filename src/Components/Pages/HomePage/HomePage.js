import { useState } from "react";

import Header from "../../Header/Header"
import HamburgerMenuComponent from "../../HamburgerMenu/HamburgerMenuComponent"
import Menu from "../../Menu/Menu"

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      menuOpen === true ? setMenuOpen(false) : setMenuOpen(true)
    }


    return (
        <div>
            <Header menuOpen={menuOpen}/>
            <HamburgerMenuComponent toggleMenu={toggleMenu} menuOpen={menuOpen}/>
            { menuOpen && <Menu/>}
        </div>
    )
}

export default HomePage
