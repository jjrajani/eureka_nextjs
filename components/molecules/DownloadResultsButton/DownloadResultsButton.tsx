import Button from "@mui/material/Button";
import styles from "components/molecules/DownloadResultsButton/styles/DownloadResultsButton.module.scss";
import { DRESS_PDF_FILE_NAME } from "utils/constants";

interface DownloadResultsButtonProps {
  filePath?: string;
}

const DownloadResultsButton = ({
  filePath,
}: DownloadResultsButtonProps) => {
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
