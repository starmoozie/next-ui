"use client";

import React from "react";
import { NavbarContent } from "@nextui-org/react";
import ThemeSwitcher from "./ThemeSwitcher";
import NavbarRightLogin from "./Login";
import NavbarRightRegister from "./Register";
import NavbarRightAvatar from "./Avatar";

export default function NavbarRight() {
    return (
        <NavbarContent justify="end" as="div">
            <ThemeSwitcher />
            <NavbarRightLogin />
            <NavbarRightRegister />
            <NavbarRightAvatar />
        </NavbarContent>
    );
}
