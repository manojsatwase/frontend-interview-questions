import { useEffect, useState } from "react";
import JobPosting from "./components/JobPosting";

import "./App.css";
import { API_ENDPOINT, ITEMS_PER_PAGE } from "./components/comman";

const App = () => {
  const [items,setItems] = useState([]);
  const [itemIds,setItemIds] = useState(null);
  const [fetchingDetails,setFetchingDetails] = useState(false);
  const [currentPage,setCurrentPage] = useState(0);

 const fetchItems = async (currPage) => {
  setCurrentPage(currPage);
  setFetchingDetails(true);

  let itemsList = itemIds // taking refence this itemIds
  if(itemsList === null){
    try{
   const responese = await fetch(`${API_ENDPOINT}/jobstories.json`);
    itemsList = await responese.json();
    setItemIds(itemsList);
    }catch(err){
      console.log(err);
    }
  }
  const itemIdsForPage = itemsList.slice(currPage * ITEMS_PER_PAGE,currPage*ITEMS_PER_PAGE+ITEMS_PER_PAGE);
  const itemsForPage = await Promise.all(itemIdsForPage.map(itemId=> fetch(`${API_ENDPOINT}/item/${itemId}.json`).then(res=>res.json())))
   setItems([...items,...itemsForPage]);
   setFetchingDetails(false);
 }

useEffect(()=>{
  if(currentPage === 0 || itemIds === null) fetchItems(currentPage)
},[])


if(!items) return <div className="loading">Loading...</div>

return (
  <div className="custom-app">
    <h1 className="custom-title">Hacker News Job Boards </h1>
      <div>
           <div className="custom-items" role="list">
            {
              items.map((item)=>(
                <JobPosting key={item.id} {...item} />
              ))
            }
           </div>
           <button 
           className={fetchingDetails ? "loading" : "custom-load-more-button"}
           onClick={()=>fetchItems(currentPage+1)} 
           disabled={fetchingDetails}
           >
            {fetchingDetails ? "Loading..." : "Load more jobs"}
           </button>
      </div>
   </div>
)
}

export default App