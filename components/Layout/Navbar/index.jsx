"use client";

import React from "react";
import {
    NavbarMenuItem,
    Navbar as Nav,
    NavbarMenu,
    Link,
} from "@nextui-org/react";
import NavbarLeft from "./Left";
import NavbarCenter from "./Center";
import NavbarRight from "./Right";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Profile",
        "Log Out",
    ];

    return (
        <Nav isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
            <NavbarLeft isMenuOpen={isMenuOpen} />
            <NavbarCenter />
            <NavbarRight />

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={
                                index === 2
                                ? "warning"
                                : index === menuItems.length - 1
                                ? "danger"
                                : "foreground"
                            }
                            href="#"
                            size="lg"
                        >
                        {item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Nav>
    );
}
