"use client";

import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Link from "next/link";
import CardBase from "../components/CardBase";
import { usePathname } from "next/navigation";

const NewNavMenu = (props) => {
  const pathname = usePathname();

  return (
    <NavigationMenu.Root className={props.className} delayDuration={100}>
      <NavigationMenu.List className="mx-6 sm:mx-12">
        <NavigationMenu.Item className={` ${pathname === "/" ? "max-w-fit" : ""}`}>
          <NavigationMenu.Trigger className="max-w-fit" aria-label="open context sub-menu" >
            <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`} title="sub menu" aria-label="sub menu for navigation on page">
              <svg width="45" height="45" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8/12 md:w-full scale-90" aria-label="sub menu for navigation on page">
                <path
                  d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="flex flex-col justify-center items-center gap-1">
            <Link href="/#top" className={`link ${pathname === "/" ? "active" : ""}`}>
              <NavigationMenu.Link asChild>
                {/* <Link to="top" smooth={true} duration={100} className=" "> */}
                <CardBase
                  variant="menu"
                  aria-label="scroll to header section"
                  className="px-1 md:px-2 py-1 rounded-md md:text-xl"
                  title="scroll to header section"
                >
                  🔝
                </CardBase>
              </NavigationMenu.Link>
            </Link>{" "}
            <Link href="/#projects" className={`link ${pathname === "/" ? "active" : ""}`}>
              <CardBase variant="menu" aria-label="scroll to Projects section" className="px-1 md:px-2 py-1 rounded-md">
                Projects
              </CardBase>
            </Link>
            <Link href="/#resume" className={`link ${pathname === "/" ? "active" : ""}`}>
              <CardBase variant="menu" aria-label="scroll to Resume section" className="px-1 md:px-2 py-1 rounded-md">
                Resume
              </CardBase>
            </Link>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link />
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger />
          <NavigationMenu.Content>
            <NavigationMenu.Sub>
              <NavigationMenu.List />
              <NavigationMenu.Viewport />
            </NavigationMenu.Sub>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator />
      </NavigationMenu.List>

      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
};

export default NewNavMenu;
