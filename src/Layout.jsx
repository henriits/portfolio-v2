import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

const Layout = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Navigation />
      <main className="pt-24 px-4 w-full h-full overflow-y-auto scrollbar-custom">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
