/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useState } from "react";

const useProduts = () => {
  const [products, setProducts] = useState([]);
//   console.log("The products from useProducts hook is : ", products);

  useEffect(() => {
    fetch("http://localhost:4000/caps")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return [products, setProducts];
};

export default useProduts;
