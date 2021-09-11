import { useState } from "react";

import Banner from "../../Banner/Banner"
import HamburgerMenuComponent from "../../HamburgerMenu/HamburgerMenuComponent"
import Menu from "../../Menu/Menu"

const HomePage = ({ menuOpen, toggleMenu}) => {

    return (
        <div>
            <Banner menuOpen={menuOpen}/>
            <HamburgerMenuComponent toggleMenu={toggleMenu} menuOpen={menuOpen} color="#ffffff"/>
            { menuOpen && <Menu toggleMenu={toggleMenu}/>}
        </div>
    )
}

export default HomePage
