import { useContext } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Modal from "@mui/material/Modal";
import UserInfoForm from "components/organisms/UserInfoModal/UserInfoForm";
import UserInfoContext from "components/organisms/UserInfoModal/context";
import styles from "components/organisms/UserInfoModal/styles/UserModal.module.scss";

interface UserInfoModalProps {}

const UserInfoModal = ({}: UserInfoModalProps) => {
  const { didSubmit } = useContext(UserInfoContext);

  return (
    <Modal open={!didSubmit}>
      <Box className={styles.userModal}>
        <Card className={styles.userModalContent}>
          <UserInfoForm />
        </Card>
      </Box>
    </Modal>
  );
};

export default UserInfoModal;
