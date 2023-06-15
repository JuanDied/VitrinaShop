import { useEffect, useState } from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

  /*    useEffect(async()=>{
        const response = await axios(API);
        setProducts(response.data);
    }, []);
*/
/*
  useEffect(() => {
    (async () => {
      const response = await axios(API);
      setProducts(response.data);
    })();
  }, [API]);
*/
useEffect(() => {
  async function fetchData() {
    const response = await axios.get(API);
    setProducts(response.data);
    console.log("hola");
    
  }
  fetchData();
}, [API]);

  return products;
};

export default useGetProducts;
