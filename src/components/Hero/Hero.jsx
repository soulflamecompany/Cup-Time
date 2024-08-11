import { Link, useSearchParams } from "react-router-dom";
const Hero = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <section className="hero">
      <div className="container">
        <div className="hero__container">
          <h1 className="hero__title">Попробуй новый вкус Арабики</h1>
          {category !== "coffee" ? (
            <Link to="/products?category=coffee" className="hero__link">
              Перейти к кофе
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default Hero;
