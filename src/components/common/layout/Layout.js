import React, { useEffect } from "react";
import Header from "./header/Header";
import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("pathname", pathname);
  }, [pathname]);
  return (
    <>
      {pathname !== "/login" && <Header />}

      <Container className="py-5">{children}</Container>
    </>
  );
};

export default Layout;
