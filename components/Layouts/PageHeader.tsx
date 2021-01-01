import { useRouter } from "next/router";

interface PageHeaderProps {}

const PageHeader = ({}: PageHeaderProps) => {
  const router = useRouter();
  const isMealMastery = router.asPath.indexOf("meal") > -1;

  const title = isMealMastery ? "Meal Mastery" : "Metabolic Mastery";

  return <header>Header {title}</header>;
};

export default PageHeader;
