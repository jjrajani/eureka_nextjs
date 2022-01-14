import MetabolicMastery from "components/organisms/MetabolicMastery/MetabolicMastery";
import UserInfoModal from "components/organisms/UserInfoModal/UserInfoModal";

interface MetabolicMasteryPageProps {}

const MetabolicMasteryPage = ({}: MetabolicMasteryPageProps) => {
  return (
    <div style={{ color: "black" }}>
      <UserInfoModal />
      <MetabolicMastery />
    </div>
  );
};

export default MetabolicMasteryPage;
