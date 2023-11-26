"use client";

import React from "react";
import {
    NavbarItem,
    Button,
    Link,
} from "@nextui-org/react";

export default function NavbarRightRegister() {
    return (
        <NavbarItem>
            <Button as={Link} color="warning" href="#" variant="flat">Register</Button>
        </NavbarItem>
    );
}
