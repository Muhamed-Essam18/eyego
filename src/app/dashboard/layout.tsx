"use client";

import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/features/auth/authSelectors";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Navbar from "@/components/navbar";

import SideBar from "@/components/sideBar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const router = useRouter();
  const pathmname = usePathname();

  /*useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);*/

  const [expanded, setExpanded] = useState(false);
  return (
    <section className="flex flex-col md:flex-row  max-h-screen ">
      <SideBar expanded={expanded} setExpanded={setExpanded} path={pathmname} />
      <div className="flex flex-col w-full md:ml-[300px] max-h-full ">
        <Navbar
          expanded={expanded}
          setExpanded={setExpanded}
          path={pathmname}
        />
        <section>{children}</section>
      </div>
    </section>
  );
}
