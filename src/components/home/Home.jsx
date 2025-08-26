import "./home.css";
import Data from "./Data";
import Social from "./Social";
import ScrollDown from "./ScrollDown";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div
            className="home__img"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/image/profile.png)`,
            }}
          ></div>

          <Data />
        </div>

        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
