import { useContext } from "react";
import MealPlannerContext from "../context";
import Button from "@mui/material/Button";

interface DownloadResultsButtonProps {}

const DownloadResultsButton = ({}: DownloadResultsButtonProps) => {
  const { downloadResults } = useContext(MealPlannerContext);

  return <Button onClick={downloadResults}>Download</Button>;
};

export default DownloadResultsButton;
