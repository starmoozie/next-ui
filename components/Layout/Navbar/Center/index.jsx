import React from 'react';
import NavbarCenterMobile from './NavbarCenterMobile';
import NavbarCenterDesktop from './NavbarCenterDesktop';

const NavbarCenter = () => {
    return (
        <>
            <NavbarCenterMobile />
            <NavbarCenterDesktop />
        </>
    );
};

export default NavbarCenter;