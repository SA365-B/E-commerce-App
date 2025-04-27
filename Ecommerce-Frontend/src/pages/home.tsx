import { Link } from "react-router-dom"; // Don't forget this if you use <Link>

const Home = () => {
  return (
    <div className="home">
      <section></section>
      <h1>
        Latest Product
        <Link to="/search" className="findmore">More</Link>
      </h1>

      {/* product card */}
      <main></main>
    </div>
  );
};

export default Home;
