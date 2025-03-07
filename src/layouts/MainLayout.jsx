import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

function MainLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="relative">
        <Outlet />
      </main>
      <footer>
        {/* <Footer lassName="relative" /> */}
      </footer>
    </div>
  );
}

export default MainLayout;
