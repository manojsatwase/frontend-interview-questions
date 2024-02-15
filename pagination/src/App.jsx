import  { useEffect, useState } from 'react'
import Pagination from './components/pagination/pagination';

import "./App.css";

const App = () => {
  const [products,setProducts] = useState([]);
  const [loading,setLoading] = useState(true);
  const [page,setPage] = useState(1);
  const [totalPages,setTotalPages] = useState(0);
  const [totalProducts,setTotalProducts] = useState(0);
  const pageLimit = page * 10;
  const currentPage = pageLimit - 10;

  const getProducts = async () => {
    try{
      const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${currentPage}`);
      const data = await res.json();
  
      if(data?.products){
        setProducts(data.products);
        setTotalPages(data.total / 10);
        setTotalProducts(data.total);
      }
    }catch(err){
      console.log(err);
    }finally{
      setLoading(false);
    }
  }

  useEffect(()=>{
     getProducts();
  },[page]);

  if(loading) return <div>Loading...</div>

  const selectPageHandler = (selectPage) => {
    if(selectPage >=1 && selectPage <= totalPages && selectPage !== page){
      setPage(selectPage)
    }
  }
  
  return (
    <div>
      {
        products.length > 0 && (
          <div className='products'>
              {/* products.slice(currentPage,pageLimit).map() */}
            { 
              products.map((product)=>(
                <div key={product.id} className='products__single'>
                <img src={product.thumbnail} alt={product.title} />
                 <span>{product.title}</span>
                </div>
              ))
            }
          </div>
        )}
    {products.length > 0 && <div className="pagination">
       <span>Showing {currentPage+1}-{pageLimit} of {totalProducts}</span>
        <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀</span>
        {/*products.length / 10 */}
        {[...Array(totalPages)].map((_, i) => {
          return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
        })}
                                                                    {/*products.length / 10 */}
        <span onClick={() => selectPageHandler(page + 1)} className={page < totalPages ? "" : "pagination__disable"}>▶</span>
      </div>}

      <Pagination />
    </div>
  )
}

export default App;