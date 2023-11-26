"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunFilledIcon, MoonFilledIcon } from "@/components/Icon";

export default function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {
                theme === "dark"
                ? <SunFilledIcon style={{ cursor: "pointer" }} onClick={() => setTheme("light")} />
                : <MoonFilledIcon style={{ cursor: "pointer" }} onClick={() => setTheme("dark")} />
            }
        </>
    );
}
