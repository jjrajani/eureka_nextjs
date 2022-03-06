import React from "react";
import Button from "@mui/material/Button";
import styles from "./styles/DownloadResultsButton.module.scss";
import {
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
} from "types/types";
import { DRESS_PDF_FILE_NAME } from "utils/constants";

interface DownloadResultsButtonProps {
  // onClick: () => void;
  results: MyDressProfileCalculatorResult;
  userInput: MyDressProfileFormState;
}

const DownloadResultsButton = ({
  /*onClick,*/ results,
  userInput,
}: DownloadResultsButtonProps) => {
  return (
    <div className={styles.wrapper}>
      {/*<Button onClick={onClick}>Download</Button>*/}
      <a
        href={`/api/sendFile?results=${JSON.stringify(
          results
        )}&userInput=${JSON.stringify(userInput)}`}
        download={DRESS_PDF_FILE_NAME}
      >
        Download
      </a>
    </div>
  );
};

export default DownloadResultsButton;
