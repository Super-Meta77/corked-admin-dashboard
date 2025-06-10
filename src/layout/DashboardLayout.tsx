import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SideNavBarSection } from "./sections/SideNavBarSection/SideNavBarSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { useState, useEffect } from "react";

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 768);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="bg-bg min-h-screen w-full">
      <div className="flex h-screen overflow-hidden">
        {/* Side navigation - fixed width on left, full height */}
        <div
          className={`h-full transition-all duration-300 ${
            isSidebarOpen ? "w-[280px] opacity-100" : "w-0 opacity-0"
          } md:w-[280px] md:opacity-100`}
        >
          <SideNavBarSection />
        </div>

        <div className="flex flex-col flex-1 h-full overflow-hidden">
          {/* Header section - spans remaining width */}
          <HeaderSection
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />

          {/* Main content area - takes remaining space */}
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
