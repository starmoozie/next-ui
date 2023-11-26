"use client";

import React from "react";
import {
    NavbarMenuToggle,
    NavbarContent,
} from "@nextui-org/react";

export default function NavbarLeftMobile({isMenuOpen}) {
    return (
        <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
        </NavbarContent>
    );
}
