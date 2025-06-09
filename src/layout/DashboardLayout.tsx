import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { SideNavBarSection } from "./sections/SideNavBarSection/SideNavBarSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";

export default function DashboardLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <main className="bg-bg min-h-screen w-full">
      <div className="flex h-screen overflow-hidden">
        {/* Side navigation - fixed width on left, full height */}
        <div className="h-full">
          <SideNavBarSection
            activePath={location.pathname}
            onNavigate={navigate}
          />
        </div>

        <div className="flex flex-col flex-1 h-full overflow-hidden">
          {/* Header section - spans remaining width */}
          <HeaderSection />

          {/* Main content area - takes remaining space */}
          <div className="flex-1 overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
