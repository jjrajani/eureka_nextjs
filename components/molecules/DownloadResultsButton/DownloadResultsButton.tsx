import React, { useEffect, useCallback, useState } from "react";
import Button from "@mui/material/Button";
import styles from "./styles/DownloadResultsButton.module.scss";
import {
  MyDressProfileCalculatorResult,
  MyDressProfileFormState,
} from "types/types";
import { DRESS_PDF_FILE_NAME } from "utils/constants";
import axios from "axios";

interface DownloadResultsButtonProps {
  // onClick: () => void;
  // results: MyDressProfileCalculatorResult;
  // userInput: MyDressProfileFormState;
  filePath: string;
}

const DownloadResultsButton = ({
  // /*onClick,*/ results,
  // userInput,
  filePath,
}: DownloadResultsButtonProps) => {
  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(false);
  // useEffect(async () => {
  //   setLoading(true);
  //   const thing = await axios.get(
  //     `/api/generate_pdf?results=${JSON.stringify(
  //       results
  //     )}&userInput=${JSON.stringify(userInput)}`
  //   );
  //   setData(thing.data);
  //   setLoading(false);
  // }, [results, userInput, setLoading, setData]);

  return (
    <div className={styles.wrapper}>
      <Button disabled={!filePath}>
        <a
          href={`/api/download_file?filePath=${filePath}`}
          download={DRESS_PDF_FILE_NAME}
        >
          Download
        </a>
      </Button>
    </div>
  );
};

export default DownloadResultsButton;
