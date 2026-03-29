import { IoIosStats } from "react-icons/io";
import { HiOutlineViewGrid } from "react-icons/hi";
import { FaStreetView } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";
import Link from "next/link";
import { layoutProps } from "@/types/dashboard";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/features/auth/authSlice";
import { useEffect } from "react";
const links = [
  { name: "Overview", href: "/dashboard", icon: HiOutlineViewGrid },
  { name: "Employees", href: "/dashboard/employees", icon: FaStreetView },
  { name: "Analytics", href: "/dashboard/analytics", icon: IoAnalytics },
];

const SideBar = ({ expanded, setExpanded, path }: layoutProps) => {
  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [expanded]);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <section
      className={`flex flex-col fixed top-0 left-0 justify-between w-[80%] md:w-[300px] h-screen bg-secondary md:flex ${expanded ? "flex z-100" : "hidden"}`}
    >
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between border-b border-muted-foreground/20 text-accent px-4 py-4">
          <div className="flex flex-row items-center  gap-3">
            <div className="flex w-10 h-10 rounded-xl bg-primary">
              <IoIosStats className="text-primary-foreground w-8 h-8 m-auto" />
            </div>
            <strong className="text-lg">Data Pulse</strong>
          </div>
          <button onClick={() => setExpanded(false)}>
            <IoIosCloseCircleOutline className="w-7 h-7 md:hidden" />
          </button>
        </div>

        <ul className="flex flex-col gap-2 p-4 text-accent">
          {links.map((link) => (
            <li
              key={link.name}
              className="cursor-pointer rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Link
                href={link.href}
                className={`flex flex-row items-center gap-3 px-4 py-2 rounded-2xl w-[90%] ${`${path}` === link.href ? "bg-muted-foreground/10 text-primary " : ""}`}
              >
                <link.icon className="w-5 h-5" />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row p-5 justify-between items-center border border-muted-foreground/20">
        <div className="flex flex-row items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-full bg-primary items-center justify-center flex p-5">
            <h2 className="text-primary-foreground text-sm">MU</h2>
          </div>
          <div className="flex flex-col items-center justify-center text-primary-foreground">
            <h2 className="text-sm">Muhamed Essam</h2>
            <small className="text-muted-foreground">admin@demo.com</small>
          </div>
        </div>
        <IoExitOutline
          onClick={() => handleLogout()}
          className="w-6 h-6 text-muted-foreground font-bold"
        />
      </div>
    </section>
  );
};

export default SideBar;
