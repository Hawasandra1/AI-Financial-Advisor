import React, {useEffect} from "react";
import { Image } from 'next/image';

import {
    LayOutGrid,
    PiggyBank,
    ReceiptText,
    ShieldCheck,
    CircleDollarSign,

} from 'lucide-react';

import {UserButton} from "@clerk/clerk-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { index } from "drizzle-orm/mysql-core";

function SideNav (){
    const menuList = [
        {
        id:1,
        name: "Dashboard",
        icon: LayoutGrid,
        path: "/dashboard",
    },
    {
        id:2,
        name: "Income",
        icon: CircleDollarSign,
        path: "/dashboard/income",
    },
    {
        id:3,
        name: "Budget",
        icon: PiggyBank,
        path: "/dashboard/budget",
    },
    {
        id:4,
        name: "Expense",
        icon: ReceiptText,
        path: "/dashboard/expense",
    },
    {
        id:5,
        name: "Upgrade",
        icon: ShieldCheck,
        path: "/dashboard/upgrade",
    },
];

const path = usePathname();

useEffect(() => {
  console.log(path);
}, [path]); // Correct dependency array

return (
  <div className="h-screen p-5 border shadow-sm">
    <div>
      <Image src={'/fina.jpg'} alt="logo" width={40} height={25} />
      <span className="text-blue="></span>
    </div>
    <div className="mt-5">
        {menuList.map((menu, index)=>(
            <Link
            href={menu.path} key={index}>
                <h2 className={`flex gap-2 items-center text-gray-500 font-medium mb-2 p-4 cursor-pointer rounded-full hover:text-primary hover:bg-blue-100 ${
    path == menu.path && 'text-primary bg-blue-100 '
  }`}>
                    <menu.icon/>
                    {menu.name}
                </h2>
            </Link>
        ))}
    </div>
  </div>
);
}

export default SideNav;