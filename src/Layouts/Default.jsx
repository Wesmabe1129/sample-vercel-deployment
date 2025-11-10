// components/Layout.jsx
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import NavigationComponents from "../components/Navigation/NavigationComponents";

function Default() {
  return (
    <div className="scroll-smooth">
      {/* <Header /> */}

      {/* Navigation Components */}
      <nav className="container mx-auto justify-center align-center text-center">
        <NavigationComponents />
      </nav>
      <main className="">
        <Outlet /> {/* This renders the matched child route */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default Default;