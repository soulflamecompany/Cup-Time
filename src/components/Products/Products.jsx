import Product from "../Product/Product";
import { useEffect } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useSearchParams } from "react-router-dom";
import Skeleton from "../../utils/Skeleton/Skeleton";

const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory, categories, productsRef } = useProducts();
  const category = searchParams.get("category");

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  const categoryTitle = categories[category] || "Товары";
  return (
    <section className="products" ref={productsRef}>
      <div className="container">
        <h2 className="products__title">{categoryTitle}</h2>
        <ul className="products__list">
          {products.length ? (
            products.map((item, index) => <Product data={item} key={index} />)
          ) : (
            <Skeleton />
          )}
        </ul>
      </div>
    </section>
  );
};
export default Products;
