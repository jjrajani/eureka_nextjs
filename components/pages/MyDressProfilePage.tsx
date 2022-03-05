import MyDressProfile from "components/organisms/MyDressProfile/MyDressProfile";

interface MyDressProfilePageProps {}

const MyDressProfilePage = ({}: MyDressProfilePageProps) => {
  return (
    <div style={{ color: "black" }}>
      <MyDressProfile />
    </div>
  );
};

export default MyDressProfilePage;
