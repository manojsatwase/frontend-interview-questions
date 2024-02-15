import {Link} from "react-router-dom";
import useProducts from "./hooks/useProducts";
import Loading from "../components/loading";

const Home = () => {
const {products,loading} = useProducts()
if(loading) return <Loading/>
const sliceTrending = products?.slice(0,6);
  return (
    <div>
      <h2>Home Page</h2>
      <span>Trending Products 🔥 </span>
      <div className="product-grid">
        {
          sliceTrending.map(product=>(
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
              </Link>
            </div>

          ))
        }
      </div>
      <Link to="/products">
        <button>View All Products</button>
      </Link>
    </div>
  )
}

export default Home;