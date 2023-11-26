"use client";

import React from "react";
import {
    NavbarContent,
    NavbarItem,
    Dropdown,
    DropdownTrigger,
    Button,
    DropdownMenu,
    DropdownItem
} from "@nextui-org/react";
import Link from "next/link";
import { ChevronDownIcon, ScaleIcon } from "@/components/Icon";
import { usePathname } from "next/navigation";
import { extractColumn } from "@/utils";

const items = [
    {
        name: "Customer",
        href: "/customer",
        description: "",
        childrens: [],
    },
    {
        name: "Features",
        href: "#",
        description: "",
        childrens: [
            {
                name: "Autoscaling",
                href: "#",
                description: "ACME scales apps to meet user demand, automagically, based on load.",
            },
        ],
    },
];

export default function NavbarCenterDesktop() {
    const pathname = usePathname();

    const icons = {
        chevron: <ChevronDownIcon fill="currentColor" size={16} />,
        scale: <ScaleIcon className="text-warning" fill="currentColor" size={30} />
    };

    return (
        <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {items.map((item, index) =>
                item.childrens.length ? (
                    <MultilevelItem
                        key={`${item.name}_${index}`}
                        item={item}
                        icons={icons}
                        pathname={pathname}
                    />
                ) : (
                    <SingleLevelItem
                        key={`${item.name}_${index}`}
                        item={item}
                        icons={icons}
                        pathname={pathname}
                    />
                )
            )}
        </NavbarContent>
    );
}

const MultilevelItem = ({item, icons, pathname}) => {
    const isActive = extractColumn(item.childrens, "href").includes(pathname);

    return (
        <Dropdown>
            <NavbarItem isActive={isActive}>
                <DropdownTrigger>
                    <Button
                        disableRipple
                        className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                        endContent={icons.chevron}
                        radius="sm"
                        variant="light"
                    >
                        {item.name}
                    </Button>
                </DropdownTrigger>
            </NavbarItem>
            <DropdownMenu
                aria-label="ACME features"
                className="w-[340px]"
                itemClasses={{
                base: "gap-4",
                }}
            >
                {
                    item.childrens.map((chilren, index) =>
                        <DropdownItem
                            key={`${chilren.name}_${index}`}
                            description={chilren.description}
                            startContent={icons.scale}
                        >
                            {chilren.name}
                        </DropdownItem>
                    )
                }
            </DropdownMenu>
        </Dropdown>
    )
}

const SingleLevelItem = ({item, icons, pathname}) => {
    return (
        <NavbarItem isActive={pathname === item.href}>
            <Link href={item.href} aria-current="page">
                {item.name}
            </Link>
        </NavbarItem>
    );
}
