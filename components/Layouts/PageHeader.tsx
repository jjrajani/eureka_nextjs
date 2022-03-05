import { useRouter } from "next/router";
import styles from "./styles/PageHeader.module.scss";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Scroll from "react-scroll";
const scroller = Scroll.scroller;

interface PageHeaderProps {}

const PageHeader = ({}: PageHeaderProps) => {
  const router = useRouter();
  // const isMealMastery = router.asPath.indexOf("meal") > -1;

  // const title = isMealMastery ? "Meal Mastery" : "Metabolic Mastery";
  const title = "My D.R.E.S.S. Profile";

  // const wrapperId = isMealMastery ? "meal-form" : "metabolic-form";
  const wrapperId = "dress-form";

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
          <div className={styles.item}>
            <PhoneIcon />
            <p>404.692.3516</p>
          </div>
          <a
            href="mailto:connect@eurekaholisticnutrition.com"
            className={styles.item}
          >
            <MailIcon />
            <p>connect@eurekaholisticnutrition.com</p>
          </a>
        </div>
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
        <div className={styles.bigLogo}>
          <img src="/images/eureka_logo.png" />
        </div>
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
            Your wellness lifestyle begins here. Ready to make healthy living a
            priority? Where do you start? What do you focus on? Discover this
            and MORE with your D.R.E.S.S. Profile Wellness Plan! Enter your
            information, goal and scores from each of the D.R.E.S.S.
            assessments. Then download your personalized My D.R.E.S.S. Profile.
            Get started today living your life well.
          </p>
        </Container>
        <div className={styles.subHeaderHeader} />
      </div>
    </header>
  );
};

export default PageHeader;
