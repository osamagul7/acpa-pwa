import React from "react";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import useIsStandalone from "../hooks/useIsStandalone";

type Props = { children: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  const isStandalone = useIsStandalone();

  return (
    <>
      {!isStandalone && <Header />}

      <main>{children}</main>

      {!isStandalone && <Footer />}
    </>
  );
};

export default Layout;
