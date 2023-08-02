"use client";
import "./styles/globals.scss";
import StyledComponentsRegistry from "../../lib/registry";
import { useState, useEffect, createContext } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import NextTopLoader from "nextjs-toploader";
/* export const AppContext = createContext(); */

export default function RootLayout({ children }) {
  /*  const [context, setContext] = useState({
    tags: [],
    upvotes: [],
    downvotes: [],
  }); */
  return (
    <html lang="en">
      <body className="main-holder">
        <NextTopLoader />
        <StyledComponentsRegistry>
          <Navbar />
          {children}

          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
    /* <AppContext.Provider value={[context, setContext]}> */
    /*     </AppContext.Provider> */
  );
}
