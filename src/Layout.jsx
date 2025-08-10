import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Layout = () => (
  <div className="flex">
    <Sidebar />
    <main className="ml-20 w-full h-screen overflow-hidden">
      <Outlet />
    </main>
  </div>
);

export default Layout;
