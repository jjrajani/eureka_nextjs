import { ReactNode } from "react";
import PageHeader from "components/Layouts/PageHeader";
import PageFooter from "components/Layouts/PageFooter";
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
