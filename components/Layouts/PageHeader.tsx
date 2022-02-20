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
  const isMealMastery = router.asPath.indexOf("meal") > -1;

  const title = isMealMastery ? "Meal Mastery" : "Metabolic Mastery";

  const wrapperId = isMealMastery ? "meal-form" : "metabolic-form";

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
      <div className={styles.headerContentWrapper}>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className={styles.cta}>
            <Button onClick={onClick}>Get Started</Button>
          </div>
        </Container>
        <div className={styles.subHeaderHeader} />
      </div>
    </header>
  );
};

export default PageHeader;
