import { useState, useEffect } from "react";
import "./styles.css";
const LoadMoreData = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);
  const [disableButton, setDisableButton] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      console.log(result);

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products && products.length >= 100) setDisableButton(true);
  });

  if (loading) {
    return <div>loading data ! please Wait</div>;
  }

  if (error) {
    return <div>Error Occured : {error}</div>;
  }
  return (
    <div className="container-pro">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.thumbnail} alt={item.title} loading="lazy" />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disableButton} onClick={() => setCount(count + 1)}>
          Load More
        </button>
        {disableButton ? <p>you have Reached to maximum products</p> : null}
      </div>
    </div>
  );
};

export default LoadMoreData;
