import Restcard from "./Restcard";
import resi from "../utils/mockdata";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


function Body(){

       // const [rlist, setrList] = useState(resi);        mock data
       const [rlist, setrList] = useState([]);

       const [isFiltered, setIsFiltered]=useState(false);

       const [originalList, setOriginalList] = useState([]);  // Store the original list for (for showing all rest. on button press)

       const [searchText, setSearchText]= useState("");


       useEffect(()=>{
              fetchData();
       },[]);

       const fetchData = async()=>{
              const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
              const json = await data.json();
              const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
             // console.log(restaurants);
              setrList(restaurants);
              setOriginalList(restaurants);
       }

       let filterBtnLogic=()=>{
              //console.log("filter btn clicked");
              //  in this we have to filter the coming list of restaurant whose rating is more than 4
              if(!isFiltered){
                     //const filteredList=rlist.filter((res)=>  ( res.info.avgRating >= 4.3 ) );
                     const filteredList=originalList.filter((res)=>  ( res.info.avgRating >= 4 ) );
                     setrList(filteredList);
              }
              else {
                     //setrList(resi);
                     setrList(originalList);
              }

              setIsFiltered(!isFiltered);      
       };

       // if(rlist.length===0){
       //        return <Shimmer/>
       // }

       const searchButton = () =>{
              // filter the restaurant, and update the UI according to that 
              // so i need search text here 
              console.log(searchText);

              const nameFilterRest = originalList.filter((chuk)=>
                     chuk.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setrList(nameFilterRest);
       };
       
    return  rlist.length===0 ? <Shimmer/> :  (
           <div className="body">
                 
                 <div className="whole-search-bar">

                  <div className="filter">
                     <button className="filter-btn" onClick={filterBtnLogic}>
                            {isFiltered ? "All Restaurants" : "Top Rated Restaurants" }
                            </button>
                  </div>

                  <div className="search-bar">
                     <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                     <button onClick={searchButton}> Search </button>
                     </div>

                 </div>


                  <div className="rest-container">
                   
                         {
                                rlist.map((el)=>(
                                       <Restcard key={el.info.id} resData={el} />
                                ))
                         }
                  
                         
                  </div>
           </div>
           
    );
}


export default Body;