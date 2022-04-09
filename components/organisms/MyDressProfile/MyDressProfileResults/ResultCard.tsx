import { ReactNode } from "react";
import Grid from "@mui/material/Grid";
import styles from "components/organisms/MyDressProfile/MyDressProfileResults/styles/ResultCard.module.scss";

interface ResultCardProps {
  alt: string;
  description: string;
  note?: string;
  img: string | ReactNode;
  result: string;
}

const ResultCard = ({
  alt,
  description,
  note,
  img,
  result,
}: ResultCardProps) => {
  return (
    <div className={styles.result}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4} className={styles.imgWrapper}>
          {typeof img === "string" ? (
            <img src={img} className={styles.img} alt={alt} />
          ) : (
            <div className={styles.img}>{img}</div>
          )}
        </Grid>
        <Grid item xs={12} md={8}>
          <Grid container direction="column">
            <Grid item>
              <p className={styles.resultValue}>
                {result}
                {note ? <span className={styles.note}> {note}</span> : null}
              </p>
            </Grid>
            <Grid item>
              <p className={styles.resultDescription}>{description}</p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResultCard;
