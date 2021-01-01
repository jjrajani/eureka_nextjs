import React from "react";
import Button from "@mui/material/Button";
import styles from "./styles/DownloadResultsButton.module.scss";

interface DownloadResultsButtonProps {
  onClick: () => void;
}

const DownloadResultsButton = ({ onClick }: DownloadResultsButtonProps) => {
  return (
    <div className={styles.wrapper}>
      <Button onClick={onClick}>Download</Button>
    </div>
  );
};

export default DownloadResultsButton;
