"use client"

import { navLinksAuth } from "@/constants/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";


const AuthLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input type="text" value={input} onChange={(e)=>setInput(e.target.value)}/>
      </div>
      {navLinksAuth.map(({ href, label }) => {
        const isActiv =
          pathname === href ||
          (pathname.startsWith(href) && href !== "/");
        return (
          <Link
            className={isActiv ? "border-2 mx-3" : "text-blue-600"}
            href={href}
            key={label}
          >
            {label}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;