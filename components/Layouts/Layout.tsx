import { ReactNode } from "react";
import PageHeader from "./PageHeader";
import Container from "@mui/material/Container";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <PageHeader />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
