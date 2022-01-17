import { useRouter } from "next/router";

interface PageHeaderProps {}

const PageHeader = ({}: PageHeaderProps) => {
  const router = useRouter();
  const isMealMastery = router.asPath.indexOf("meal") > -1;

  const title = isMealMastery ? "Meal Mastery" : "Metabolic Mastery";

  return (
    <header>
      <div>Logo Image</div>
      <h1>{title}</h1>
      <div>Link to eureka (open new tab)</div>
    </header>
  );
};

export default PageHeader;
