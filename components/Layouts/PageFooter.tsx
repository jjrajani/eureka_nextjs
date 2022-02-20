import moment from "moment";
import Container from "@mui/material/Container";
import styles from "./styles/PageFooter.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

interface PageFooterProps {}

const PageFooter = ({}: PageFooterProps) => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.secton}>
          <p>
            Site by <a href="https://jjrajani.github.io/#/home">humdrum</a>
          </p>
          <p>© {moment().format("YYYY")} Eureka! Holistic Nutrition, LLC</p>
        </div>
        <div className={styles.secton}>
          <a
            href="https://eurekaholisticnutrition.com/terms-of-service/"
            target="_blank"
            rel="noreferrer"
          >
            Site Terms
          </a>
          <a
            href="https://eurekaholisticnutrition.com/privacy-policy/"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </a>
          <a
            href="https://eurekaholisticnutrition.com/scope-of-service-disclaimer/"
            target="_blank"
            rel="noreferrer"
          >
            Disclaimer
          </a>
          <a
            href="https://www.facebook.com/Eureka-Holistic-Nutrition-113571287044136"
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com/eurekaholisticnutrition/"
            target="_blank"
            rel="noreferrer"
            className={styles.icon}
          >
            <InstagramIcon />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default PageFooter;
