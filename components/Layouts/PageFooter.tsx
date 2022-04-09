import moment from "moment";
import Container from "@mui/material/Container";
import styles from "./styles/PageFooter.module.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

interface PageFooterProps {}

const PageFooter = ({}: PageFooterProps) => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.bottom}>
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
        </div>
      </Container>
      <Container className={styles.disclaimer}>
        <p>
           My D.R.E.S.S. Profile is for educational purposes only to help improve overall health,
           vitality and well-being.  This tool is not meant to be used to diagnose or treat specific
           diseases, disorders or conditions of any kind. It is always advised to check with your
           physician before starting any new eating, exercise, or health improvement routine.
        </p>
      </Container>
    </footer>
  );
};

export default PageFooter;
