"use client";

import React from "react";
import {
    NavbarContent,
    NavbarBrand
} from "@nextui-org/react";
import Link from "next/link";
import { AcmeLogo } from "@/components/Logo";

export default function NavbarLeftDesktop() {
    return (
        <NavbarContent className="hidden sm:flex gap-4" justify="start">
            <NavbarBrand>
                <AcmeLogo />
                <Link className="font-bold text-inherit" href="/">ACME</Link>
            </NavbarBrand>
        </NavbarContent>
    );
}
