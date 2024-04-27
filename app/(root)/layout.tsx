import MobileNav from "@/components/shared/MobileNav";
import Sidebar from "../../components/shared/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      {/* Sidebar should be a child of root */}
      <Sidebar />
      <MobileNav/>
      <div className="root-container">
        <div className="wrapper">
          {/* Render children inside the wrapper */}
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
