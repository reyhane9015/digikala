import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import Menu from "./menu";
import data from "@/lib/data";
import Search from "./search";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
// import Sidebar from "./sidebar";
// import { getAllCategories } from "@/lib/actions/product.actions";

export default async function Header() {
  //   const categories = await getAllCategories();
  return (
    <header className="bg-black text-white">
      <div className="px-2">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center header-button font-extrabold text-2xl m-1"
            >
              <Image
                src="/icons/logo.jpg"
                width={40}
                height={40}
                alt={`${APP_NAME} logo`}
                className="pr-2"
              />
              <span style={{ color: "#ED1B37" }}>{APP_NAME}</span>
            </Link>
          </div>
          <div className="hidden md:block flex-1 max-w-xl">
            <Search />
          </div>
          <Menu />
        </div>
        <div className="md:hidden block py-2">
          <Search />
        </div>
      </div>
      <div className="flex items-center px-3 mb-[1px]  bg-gray-800">
        {/* <Sidebar categories={categories} /> */}

        <Button
          variant="ghost"
          className="dark header-button flex items-center gap-1 text-base"
        >
          <MenuIcon />
          All
        </Button>
        <div className="flex items-center flex-wrap gap-3 overflow-hidden   max-h-[42px]">
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className="header-button !p-2"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
