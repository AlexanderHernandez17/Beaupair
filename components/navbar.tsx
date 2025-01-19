"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleToggle = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <NextUINavbar
      maxWidth="full"
      position="sticky"
      style={{
        backdropFilter: "none",
        background: "transparent",
      }}
    >
      <ThemeSwitch />

      {/* Desktop Menu */}
      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="start"
      >
        <ul className="flex gap-4 justify-start ml-2">
          {siteConfig.navItems?.map((item) => (
            <li
              key={item.label}
              className="relative group"
              onClick={() => handleToggle(item.label)}
            >
              <NextLink
                href={item.href}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
              >
                {item.label}
              </NextLink>
              {item.subItems && (
                <ul
                  className={clsx(
                    "absolute left-0 bg-white text-black shadow-md mt-2 w-48 transition-opacity",
                    openMenu === item.label ? "block opacity-100" : "hidden opacity-0"
                  )}
                >
                  {item.subItems.map((subItem) => (
                    <li key={subItem.href}>
                      <NextLink
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {subItem.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </NavbarContent>

      {/* Mobile Menu */}
      <NavbarContent className="sm:hidden basis-1 pl-4" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>
      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navItems?.map((item) => (
            <div key={item.label}>
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleToggle(item.label)}
              >
                <NextLink href={item.href} className="text-lg text-gray-700">
                  {item.label}
                </NextLink>
                {item.subItems && (
                  <button className="text-gray-500">
                    {openMenu === item.label ? "▲" : "▼"}
                  </button>
                )}
              </div>
              {item.subItems && openMenu === item.label && (
                <ul className="bg-white text-black shadow-md mt-2 pl-4 space-y-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.href}>
                      <NextLink
                        href={subItem.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {subItem.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </NavbarMenu>

      {/* Brand Logo */}
    <NavbarContent className="basis-1/5 sm:basis-full w-full" justify="end">
      <NavbarBrand as="li" className="gap-3 max-w-fit">
        {/* Enlace que lleva a la página principal */}
        <Link href="/" passHref>
          <div className="w-24 h-24 md:w-28 md:h-28 lg:w-40 lg:h-40 mt-16 cursor-pointer">
            <Image
              src="/logoCompleto.png"
              alt="Be au pair"
              layout="responsive"
              width={70}
              height={70}
              className="object-contain w-full h-full"
            />
          </div>
        </Link>
      </NavbarBrand>
    </NavbarContent>
    </NextUINavbar>
  );
};
