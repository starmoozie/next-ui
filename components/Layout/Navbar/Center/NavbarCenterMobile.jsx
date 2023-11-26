"use client";

import React from "react";
import {
    NavbarContent,
    NavbarBrand
} from "@nextui-org/react";
import Link from "next/link";
import { AcmeLogo } from "@/components/Logo";

export default function NavbarCenterMobile() {
    return (
        <NavbarContent className="sm:hidden pr-3" justify="center">
            <NavbarBrand>
                <AcmeLogo />
                <Link href="/" className="font-bold text-inherit">ACME</Link>
            </NavbarBrand>
        </NavbarContent>
    );
}
