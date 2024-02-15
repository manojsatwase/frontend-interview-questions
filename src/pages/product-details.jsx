import { useParams,Link } from "react-router-dom";
import useProducts from "./hooks/useProducts";
import Loading from "../components/loading";

const ProductDetails = () => {
 const {id} = useParams();
 const {loading,singleProduct:product} = useProducts(id);
 if(loading) return <Loading/>

  return (
    <>
     <h2>Product Details</h2>
     <Link to="/products">
      <button>Products</button>
     </Link>
     <div className="product-grid" style={{marginLeft:"5rem"}}>
    {
      product && (
        <div className="product-card" style={{width:"50vw"}}>
           <img src={product.thumbnail} alt={product.title} />
           <h3>{product.title}</h3>
           <p>{product.price}</p>
           <p>{product.description}</p>
           <p>discount {product.discountPercentage}%</p>
        </div>
      )
    }
  </div>
  </>
  )
}

export default ProductDetails;