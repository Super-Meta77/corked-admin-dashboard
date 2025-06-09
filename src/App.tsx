import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import { Dashboard } from "./layout/sections/MainContentSection/dashboard/dashboard/dashboard";
import { Analytics } from "./layout/sections/MainContentSection/dashboard/analytics/analytics";
import { Winery } from "./layout/sections/MainContentSection/dashboard/winery/winery";
import { Interactions } from "./layout/sections/MainContentSection/dashboard/interactions/interactions";
import { Marketplace } from "./layout/sections/MainContentSection/dashboard/marketplace/marketplace";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route element={<DashboardLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="winery" element={<Winery />} />
          <Route path="interactions" element={<Interactions />} />
          <Route path="marketplace" element={<Marketplace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
