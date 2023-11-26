"use client";

import React from 'react';
import NavbarLeftMobile from './NavbarLeftMobile';
import NavbarLeftDesktop from './NavbarLeftDesktop';

const NavbarLeft = ({isMenuOpen}) => {
    return (
        <>
            <NavbarLeftMobile isMenuOpen={isMenuOpen} />
            <NavbarLeftDesktop />
        </>
    );
};

export default NavbarLeft;