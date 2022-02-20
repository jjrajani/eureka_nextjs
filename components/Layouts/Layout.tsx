import { ReactNode } from "react";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
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
      <PageFooter />
    </>
  );
};

export default Layout;
