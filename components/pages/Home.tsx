import MealPlanner from "components/organisms/MealPlanner/MealPlanner";

interface HomeProps {}

const Home = ({}: HomeProps) => {
  return (
    <div style={{ color: "black" }}>
      <MealPlanner />
    </div>
  );
};

export default Home;
