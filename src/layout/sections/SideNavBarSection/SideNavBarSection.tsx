import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  {
    icon: "/mask-group-dark.png",
    iconInactive: "/mask-group-white.png",
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: "/dropdown-icon-dark.svg",
    iconInactive: "/dropdown-icon-white.svg",
    label: "Analytic & Benchmark",
    href: "/analytics",
  },
  {
    icon: "/wineglass-2-line-dark.svg",
    iconInactive: "/wineglass-2-line-white.svg",
    label: "Winery Page Manager",
    href: "/winery",
  },
  {
    icon: "/icon-dark.svg",
    iconInactive: "/icon-white.svg",
    label: "User Interaction Hub",
    href: "/interactions",
  },
  {
    icon: "/store-2-line-dark.svg",
    iconInactive: "/store-2-line-white.svg",
    label: "Marketplace Sales Hub",
    href: "/marketplace",
  },
];

export const SideNavBarSection = () => {
  return (
    <nav className="h-full flex flex-col bg-app-primary border-r border-[#e0e1e4] shadow-[0px_0px_1px_#00000017,0px_0px_1px_#0000000d,0px_0px_1px_#00000003,0px_0px_1px_transparent]">
      <div className="flex flex-col items-center gap-5 py-2.5 px-2.5">
        <img
          className="w-[181px] h-[181px] object-cover"
          alt="Corked main logo"
          src="/corked-main-logo--2--2-1.png"
        />

        <div style={{ opacity: "0" }} className="w-60 h-px bg-[#e0e1e4]" />

        <div className="flex flex-col items-start gap-[18px] w-full">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "flex h-10 items-center gap-2 pl-0 pr-2 py-0 w-full rounded-lg transition-colors",
                  isActive ? "bg-highlight" : "hover:bg-app-primary/80"
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div className="relative w-[5px] h-[52px] mt-[-6px] mb-[-6px] rounded-[0px_20px_20px_0px]" />
                  <div className="flex items-center gap-[37px] flex-1">
                    <div className="flex items-center gap-3">
                      <img
                        className={cn(
                          "relative",
                          item.icon === "/mask-group-dark.png"
                            ? "w-[22px] h-[22px]"
                            : "w-6 h-6"
                        )}
                        alt={`${item.label} icon`}
                        src={isActive ? item.icon : item.iconInactive}
                      />
                      <span
                        className={cn(
                          "font-outfit text-sm leading-6 whitespace-nowrap",
                          isActive
                            ? "font-semibold text-primary-text"
                            : "font-medium text-white"
                        )}
                      >
                        {item.label}
                      </span>
                    </div>
                  </div>
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div
          style={{ opacity: "0" }}
          className="w-[202px] h-px bg-[#e0e1e4] mb-[-1px]"
        />
      </div>
    </nav>
  );
};
