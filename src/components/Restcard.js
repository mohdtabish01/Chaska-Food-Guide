import { CDN_URL  } from "../utils/constants";


const cscs={
    backgroundColor : "#f0f0f0",
}

function Restcard(props){
    const { resData }=props;

    const {cloudinaryImageId, name, locality, areaName, avgRating, sla, cuisines } = resData?.info;

    const limitedCuisines = cuisines.slice(0, 3).join(", ");
  
    return(
           <div className="restcard" style={cscs}>
                  <img className="food-img" alt="food-img" src={CDN_URL + cloudinaryImageId} />
              

                  <h1>{name}</h1>
                  <p>{limitedCuisines}</p>
                  <p>{locality}, {areaName}</p>
                  <p>Rating: {avgRating} ⭐</p>
                  <p>Delivery Time: {sla.deliveryTime} minutes</p>
                  {/* <p>Cuisines: {resData.info.cuisines.join(", ")}</p> */}  
                 


           </div>
    );
}

export default Restcard;