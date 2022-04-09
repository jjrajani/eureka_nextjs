import { useEffect } from "react";
import styles from "components/Layouts/styles/PageHeader.module.scss";
import Container from "@mui/material/Container";
import axios from "axios";

interface PageHeaderProps {}

const PageHeader = ({}: PageHeaderProps) => {
  const title = "My D.R.E.S.S. Profile";

  useEffect(() => {
    axios.get("/api/cleanup_temp_folders");
  }, []);

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
