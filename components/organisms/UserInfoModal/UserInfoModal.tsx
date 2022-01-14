import { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import UserInfoForm from "./UserInfoForm";
import UserInfoContext from "./context";

interface UserInfoModalProps {}

const UserInfoModal = ({}: UserInfoModalProps) => {
  const { didSubmit } = useContext(UserInfoContext);

  return (
    <Modal open={!didSubmit}>
      <Box
        style={{
          display: "flex",
          height: "100vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card sx={{ width: "80vw", maxWidth: "548px", padding: "24px" }}>
          <UserInfoForm />
        </Card>
      </Box>
    </Modal>
  );
};

export default UserInfoModal;
