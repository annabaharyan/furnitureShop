import { useState } from "react";


import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  const [shopingOpen, setShopingOpen] = useState(false);

  return (
    <div className="main-container ">
      <Header shopingOpen={shopingOpen} setShopingOpen={setShopingOpen} />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Layout;
