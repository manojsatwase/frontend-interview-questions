import  { useEffect, useState } from 'react'

const useProducts = (id) => {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true);
    const [singleProduct,setSingleProduct] = useState(null);
    const getProducts = async () => {
      try{
        if(id){
            const res = await fetch(`https://dummyjson.com/products/${id}`);
            const data = await res.json();
            setSingleProduct(data);
        }
       const res = await fetch("https://dummyjson.com/products");
       const data = await res.json();
       setProducts(data.products);
      }catch(err){
        console.log(err);
      }finally{
        setLoading(false);
      }
    }
  
    useEffect(()=>{
      getProducts();
    },[])
    return {
        loading,
        products,
        singleProduct
    }
}

export default useProducts