import { useEffect } from "react";
import { useRouter } from "next/router";
import styles from "./styles/PageHeader.module.scss";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Scroll from "react-scroll";
const scroller = Scroll.scroller;
import axios from "axios";

interface PageHeaderProps {}

const PageHeader = ({}: PageHeaderProps) => {
  const router = useRouter();
  // const isMealMastery = router.asPath.indexOf("meal") > -1;

  // const title = isMealMastery ? "Meal Mastery" : "Metabolic Mastery";
  const title = "My D.R.E.S.S. Profile";

  // const wrapperId = isMealMastery ? "meal-form" : "metabolic-form";
  const wrapperId = "dress-form";

  useEffect(() => {
    axios.get("/api/cleanup_temp_folders");
  }, []);

  const onClick = () => {
    scroller.scrollTo(wrapperId, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -90, // Scrolls to element - 50 pixels down the page
    });
  };

  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <div>
          <a
            href="https://eurekaholisticnutrition.com/"
            target="_blank"
            rel="noreferrer"
            className={styles.item}
          >
            <img src="/images/apple-logo.svg" />
            <p>Eureka! Holistic Nutrition</p>
          </a>
        </div>
      </div>
      <div>
        <div className={styles.headerContent}>
          <div>
            <h2>Holistic Nutrition & Health Coaching</h2>
            <h1>{title}</h1>
          </div>
          <div className={styles.headerFooter} />
        </div>
      </div>
      <div className={styles.subHeader}>
        <Container>
          <p>
          My D.R.E.S.S. Profile is an assessment tool that helps personalize your wellness routine. Discover your Diet Type, Rest Rx, Exercise F.I.T.T., Stress Stage and Supplement Type based on your assessment scores. Enter your information, goal, and scores from each of the D.R.E.S.S. assessments, and download your personalized D.R.E.S.S. Profile results to review with your Coach to get started!
          </p>
        </Container>
        <div className={styles.subHeaderHeader} />
      </div>
    </header>
  );
};

export default PageHeader;
