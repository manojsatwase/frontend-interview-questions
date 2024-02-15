import {Link} from "react-router-dom";
import useProducts from "./hooks/useProducts";
import Loading from "../components/loading";

const ProductList = () => {
  const {loading,products} = useProducts();

  if(loading) return <Loading/>

  return (
    <div>
      <h2>Products Listing 🔥 </h2>
      <div className="product-grid">
        {
          products?.map(product=>(
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </Link>
            </div>

          ))
        }
      </div>
      <Link to="/">
        <button>Back To Home</button>
      </Link>
    </div>
  )
}

export default ProductList